import React, { useEffect, useState } from "react";
import portfolioJson from "../json/portfolioData.json";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { client } from "../common/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleProject = async () => {
      setLoading(true);
      const query = `*[_type == "project2" && id == $id][0]{
  name,
  image,
  category,
  id,
  userClass,
  years,
  multiImages,
  descriptionTitle,
  shortDescription,
  descriptionImage,
  link {
    title,
    url
  },
  description {
    ProjectOverview { title, content },
    ConceptObjective { title, content },
    DesignProcess {
      title,
      content[] { title, content }
    },
    ResearchInspiration { title, content },
    impactReflection { title, content },
    ProjectHighlights {
      title,
      content[] { title, content }
    },
    conclusion { title, content }
  },
  iframes[] {
    src
  }
}`;

      try {
        const data = await client.fetch(query, { id });

        if (data) {
          setProject({
            ...data,
            imageUrl: data?.image ? urlFor(data?.image).url() : null,
            multiImageUrls: data?.multiImages
              ? data?.multiImages.map((img) => urlFor(img).width(400).url())
              : [],
            descriptionImageUrl: data?.descriptionImage
              ? urlFor(data?.descriptionImage).url()
              : null,
          });
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching project detail:", error);
        setLoading(false);
      }
    };

    fetchSingleProject();
  }, [id]);

  // const project = portfolioJson.find((item) => item.id == id);
  if (!project) {
    return loading ? <div>loading...</div> : <div>Project not found</div>;
  }

  const handleBack = () => {
    if (!id) return;
    const prevId = parseInt(id, 10) - 1;
    if (prevId < 1) return; // Prevent going to a negative ID
    navigate(`/details/${prevId}`);
  };

  const handleNext = () => {
    if (!id) return;
    const nextId = parseInt(id, 10) + 1;
    const nextProject = portfolioJson?.find((item) => item.id == nextId);
    if (!nextProject) return; // Prevent going to a non-existent ID
    navigate(`/details/${nextId}`);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-portfolio text-end">
              <a onClick={handleBack}>
                <i class="bi bi-chevron-left"></i>
              </a>
              <a onClick={handleNext}>
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
            <h1 className="detail-title">{project?.name}</h1>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-8">
            <img
              src={require(`../assets/img/${project?.image}`)}
              className="img-fluid w-100 rounded"
              alt=""
            />
          </div> */}
          <div className="col-md-8">
            <Gallery project={project} />
          </div>

          <div className="col-md-4">
            <div class="project-description">
              <div class="block-title">
                <h3>Description</h3>
              </div>
              <ul class="project-general-info">
                <li>
                  <p>
                    <i class="bi bi-person-fill"></i> {project?.userClass}
                  </p>
                </li>
                {project?.link?.url && (
                  <li>
                    <p>
                      <i class="bi bi-globe"></i>{" "}
                      <a
                        style={{ color: "#e5b556" }}
                        href={project?.link?.url}
                        target="_blank"
                      >
                        {project?.link?.title}
                      </a>
                    </p>
                  </li>
                )}
                <li>
                  <p>
                    <i class="bi bi-calendar3"></i> {project?.years}
                  </p>
                </li>
              </ul>

              <div class="text-justify">
                {project?.descriptionTitle && (
                  <p>
                    <strong>{project?.descriptionTitle}</strong>
                  </p>
                )}
                {project?.shortDescription && (
                  <p>{project?.shortDescription}</p>
                )}

                {project?.description?.ProjectOverview && (
                  <p>
                    <strong>
                      {project?.description?.ProjectOverview?.title ||
                        "Project Overview"}
                    </strong>
                    <br />
                    {project?.description?.ProjectOverview?.content}
                  </p>
                )}
                {project?.description?.ConceptObjective && (
                  <p>
                    <strong>
                      {project?.description?.ConceptObjective?.title ||
                        "Concept & Objective"}
                    </strong>
                    <br />
                    {project?.description?.ConceptObjective?.content}
                  </p>
                )}
                {project?.description?.DesignProcess && (
                  <>
                    <p>
                      <strong>
                        {project?.description?.DesignProcess?.title ||
                          "Design Process"}
                      </strong>
                    </p>
                    {project?.description?.DesignProcess?.description && (
                      <p>{project?.description?.DesignProcess?.description}</p>
                    )}
                    <ol>
                      {project?.description?.DesignProcess?.content.map(
                        (item, index) => (
                          <li key={index}>
                            {item?.title && <strong>{item?.title}:</strong>}{" "}
                            {item?.content}
                          </li>
                        )
                      )}
                    </ol>
                  </>
                )}

                {project?.description?.ResearchInspiration && (
                  <p>
                    <strong>
                      {project?.description?.ResearchInspiration?.title ||
                        "Research & Inspiration"}
                    </strong>
                    <br />
                    {project?.description?.ResearchInspiration?.content}
                  </p>
                )}
                {project?.description?.impactReflection && (
                  <p>
                    <strong>
                      {project?.description?.impactReflection?.title ||
                        "Impact & Reflection"}
                    </strong>
                    <br />
                    {project?.description?.impactReflection?.content}
                  </p>
                )}
                {project?.description?.ProjectHighlights && (
                  <>
                    <p>
                      <strong>
                        {project?.description?.ProjectHighlights?.title ||
                          "Project Highlights"}
                      </strong>
                    </p>
                    <ul>
                      {project?.description?.ProjectHighlights?.content.map(
                        (item, index) => (
                          <li key={index}>
                            {item?.title && <strong>{item?.title}:</strong>}{" "}
                            {item?.content}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}

                {project?.description?.Conclusion && (
                  <p>
                    <strong>
                      {project?.description?.Conclusion?.title || "Conclusion"}
                    </strong>
                    <br />
                    {project?.description?.Conclusion?.content}
                  </p>
                )}
                {project?.descriptionImage && (
                  <img
                    src={require(`../assets/img/${project?.descriptionImage}`)}
                    className="img-fluid w-100 rounded"
                    alt={project?.name}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
