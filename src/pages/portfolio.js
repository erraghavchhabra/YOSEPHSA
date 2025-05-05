import React from 'react';

import sampleImg from '../assets/img/p1.jpg';
import sampleImg2 from '../assets/img/p2.jpg';
import sampleImg3 from '../assets/img/p3.jpg';

const TabsComponent = () => {
  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs m-nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="aramco-tab" data-bs-toggle="tab" data-bs-target="#aramco" type="button" role="tab">
            Aramco
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="iarda-tab" data-bs-toggle="tab" data-bs-target="#iarda" type="button" role="tab">
            IARDA
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mascola-tab" data-bs-toggle="tab" data-bs-target="#mascola" type="button" role="tab">
            Mascola
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="university-tab" data-bs-toggle="tab" data-bs-target="#university" type="button" role="tab">
            University
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        <div className="tab-pane fade show active" id="all" role="tabpanel">
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="aramco" role="tabpanel">
        <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
        </div>
        <div className="tab-pane fade" id="iarda" role="tabpanel">
        <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
        </div>
        <div className="tab-pane fade" id="mascola" role="tabpanel">
        <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
        </div>
        <div className="tab-pane fade" id="university" role="tabpanel">
        <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">WhiToo</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg2} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Text Portrait</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">Text</span>
              </a>
            </div>
            <div className='col-lg-4 col-md-4'>
              <a href="#" className='port-box'>
                <div className="item-img">
                <img src={sampleImg3} className="img-fluid w-100" alt="" />
                </div>
                <h4 class="name">Arabic Graffiti</h4>
                <i class="bi bi-file-earmark-text"></i>
                <span class="category">University</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
