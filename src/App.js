import './App.css';
import { BsEnvelope,BsWhatsapp,BsStarFill,BsStarHalf,BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { FaFacebookF,FaCertificate, FaTwitter,FaLinkedin, FaChevronDown,FaPlay,FaQuoteRight,FaGraduationCap,FaUniversity,FaHandPointRight, FaUserFriends,FaChalkboardTeacher} from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TiSocialGooglePlus,TiSocialInstagram } from "react-icons/ti";
import { GiTeacher,GiUpgrade } from "react-icons/gi";
import { HiArrowLongRight,HiUserGroup,HiComputerDesktop } from "react-icons/hi2";
import { CiYoutube,CiPenpot } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import myimg from './image/logo-white.svg'
import myimg1 from './image/logo-blue.svg'

function App(){
    return(
      <div class="Firstpage">
        {/* First Header */}
        <div class='head'>
          <div class='container'>
            <div class="main-head">
              <div class='urlinfo'>
                <a class='inbox'><BsEnvelope></BsEnvelope><span>info@cdmi.in</span></a>
                <a class='certificate'><FaCertificate></FaCertificate><span> Verify Certificate</span></a>
              </div>
              <div class='qus'>
                <p>HAVE ANY QUESTION ? +91 90333 16003</p>
              </div>
              <div class='icon'>
                <a><FaFacebookF></FaFacebookF></a>
                <a><FaTwitter></FaTwitter></a>
                <a><TiSocialGooglePlus></TiSocialGooglePlus></a>
                <a><FaLinkedin></FaLinkedin></a>
                <a><TiSocialInstagram></TiSocialInstagram></a>
                <a><CiYoutube></CiYoutube></a>
                <a><BsWhatsapp></BsWhatsapp></a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Header */}
        <div class='logo-head'>
          <div class='container'>
            <div class='menu-head'>
                <div class="logo">
                  <img src={myimg1}></img>
                </div>
                <div class='menu'>
                  <ul>
                    <li>HOME</li>
                    <li>COURSES<FaChevronDown></FaChevronDown></li>
                    <li>ACTIVITIES<FaChevronDown></FaChevronDown></li>
                    <li>BLOG</li>
                    <li>KNOW US<FaChevronDown></FaChevronDown></li>
                    <li>GET IN TOUCH</li>
                    <li>STUDENT ZONE<FaChevronDown></FaChevronDown></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div class='slider'>
          <img src={require(`./image/1.jpg`)}></img>
        </div>
      {/* Course Contain */}
        <div class='course-info'>
          <div class='container'>
              <div class='course-head'>
                <p class='first-head'>
                  <hr></hr>
                  <span>CREATIVE COURSE</span>
                </p>
                <p class='second-head'>
                    <h1>OFFERED COURSES</h1>
                </p>
              </div>
              <div class='top-course'>
                      <div>
                        <img src={require(`./image/java.jpg`)}></img>
                        <a>Development Courses</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p><button>Know More..!</button>
                        </div>
                      </div>
                      <div>
                        <img src={require(`./image/Maya_Pro.jpg`)}></img>
                        <a>Design Courses</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p><button>Know More..!</button>
                        </div>
                      </div>
                      <div>
                        <img src={require(`./image/data-science.webp`)}></img>
                        <a>Programming IT</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p> <button>Know More..!</button>
                        </div>
                      </div>
                  </div>
                  <div class='top-course'>
                      <div>
                        <img src={require(`./image/react-js.jpg`)}></img>
                        <a>Trendy Courses</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p><button>Know More..!</button>
                        </div>
                      </div>
                      <div>
                        <img src={require(`./image/Auto(Civil).jpg`)}></img>
                        <a>Civil-Mech. Engineering</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p><button>Know More..!</button>
                        </div>
                      </div>
                      <div>
                        <img src={require(`./image/training-institute.jpg`)}></img>
                        <a>Business Development</a><hr></hr>
                        <div class='knowmor'>
                          <p><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></p><button>Know More..!</button>
                        </div>
                      </div>
                  </div>
                  <div class='viewall'>
                     <button>View All Courses<HiArrowLongRight></HiArrowLongRight></button>
                  </div>
          </div>
        </div>
        {/* About Us */}
        <div class='about-us'>
                  <div class='about-head'>
                      <p class='first-head'>
                        <hr></hr>
                        <span>ABOUT US</span>
                      </p>
                      <p class='second-head'>
                          <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
                      </p>
                      <p class='about-info'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.  
                      </p>
                      <div class='about-enroll'>
                        <button>Enroll Now..!<HiArrowLongRight></HiArrowLongRight></button>
                      </div>
                  </div>
                 <div class='aboutus-img'>
                      <div class='about-photo'>
                        <img src={require(`./image/about-us.jpg`)} style={{width:'600px'}}></img>
                      </div>
                      <p className='play'>
                        <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
                      </p>
                 </div>
        </div>
        {/* Review */}
        <div class='review'>
            <div class='counter'>
                <div class='container'>
                  <div class='good-review'>
                    <div>
                      <p>< FaUserFriends></FaUserFriends></p>
                      <h1>18000+</h1>
                      <h4>HAPPY STUDENTS</h4>
                    </div>
                    <div>
                      <p>< CiPenpot></CiPenpot></p>
                      <h1>10+</h1>
                      <h4>CERTIFICATION APPROVAL</h4>
                    </div>
                    <div>
                      <p>< FaChalkboardTeacher></FaChalkboardTeacher></p>
                      <h1>100+</h1>
                      <h4>CERTIFIED TEACHERS</h4>
                    </div>
                    <div>
                      <p>< FaGraduationCap></FaGraduationCap></p>
                      <h1>12000+</h1>
                      <h4>STUDENTS PLACEDS</h4>
                    </div>
                  </div>
                </div>
            </div> 
        </div>
        {/* Happy Student */}
        <div class='happy-us'>
              <div className='container'>
                  <div class='test-main'>
                    <div class='test-head'>
                            <p class='test1-head'>
                              <hr></hr>
                              <span>HAPPY STUDENTS</span>
                            </p>
                            <p class='test2-head'>
                                <h1>ALUMNI SPEAK</h1>
                            </p>
                            <p className='test-icon'>
                              <p><FaQuoteRight></FaQuoteRight></p>
                              <div>
                                <p><BsChevronLeft></BsChevronLeft></p>
                                <p><BsChevronRight></BsChevronRight></p>
                              </div>
                            </p>
                            <p class='test-info'>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.
                            </p>
                            <p class='test-person'>
                              <img src={require(`./image/happy-students.jpg`)}></img>
                              <span>
                                  <p>Goti Shruti</p>
                                  <i>
                                     <h5>Android Developer </h5>
                                     <p>@ KD Infotach</p>
                                  </i>
                              </span>
                            </p>
                        </div>
                      <div class='test-img'>
                            <div class='test-photo'>
                                <img src={require(`./image/testimonial_shape.png`)}></img>
                            </div>
                      </div>
                    </div>
              </div>
        </div>
        {/* Why Choose Creative */}
        <div class='creative-info'>
          <div class='container'>
              <div class='creative-head'>
                <p class='creative1-head'>
                  <hr></hr>
                  <span>READ OUR DIFFERENCE</span>
                </p>
                <p class='creative2-head'>
                    <h1>WHY CHOOSE CREATIVE</h1>
                </p>
              </div>
              <div class='only-creative'>
                      <div>
                        <h1><GiTeacher class='sv1'></GiTeacher></h1>
                        <h3>Industry Experts As Trainers</h3>
                        <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                      </div>
                      <div>
                        <h1><HiUserGroup class='sv2'></HiUserGroup></h1>
                        <h3>Latest Curriculum</h3>
                        <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                      </div>
                      <div>
                        <h1><HiComputerDesktop class='sv3'></HiComputerDesktop></h1>
                        <h3>Latest Technology</h3>
                        <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                      </div>
                  </div>
                  <div class='only-creative'>
                      <div>
                        <h1><MdSupportAgent  class='sv4'></MdSupportAgent ></h1>
                        <h3>Interview Assistance</h3>
                        <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                      </div>
                      <div>
                        <h1><GiUpgrade class='sv5'></GiUpgrade></h1>
                        <h3>Free Upgradation</h3>
                        <p>We will be provided free upgradation for any newer version of the course you have.</p>
                      </div>
                      <div>
                        <h1><FaHandsHoldingChild class='sv6'></FaHandsHoldingChild></h1>
                        <h3>Lifetime Support</h3>
                        <p>We will provide you lifetime support on all the courses you learned from us.</p>
                      </div>
                </div>
          </div> 
        </div>
        <div class='placement'>
          <div class='container'>
            <div class='student-head'>
                  <p class='stu1-head'>
                    <hr></hr>
                    <span>STUDENT PLACEMENT</span>
                  </p>
                  <p class='stu2-head'>
                      <h1>OUR RECRUITMENT PARTNERS</h1>
                  </p>
                  <div>
                    <img src={require(`./image/Codelab7.png`)}></img>
                    <img src={require(`./image/Lv-infotech01.png`)}></img>
                    <img src={require(`./image/Zenex-Solutions.png`)}></img>
                    <img src={require(`./image/medowl-media.png`)}></img>
                    <img src={require(`./image/templatemela.png`)}></img>
                    <img src={require(`./image/sokf.png`)}></img>
                  </div>
            </div>
            <div className='demand'>
              <p className='our_d'>Our Demanded Course -</p>
              <div className='parent_btn'>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
                  <p className='multi'>Python Training Institute In Varachha</p>
                  <p className='multi'>Adobe illustrator design</p>
                  <p className='multi'>Adobe xd design training institute in varachha</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <p className='show'>Show More</p>
              </div>
            </div>
          </div>
        </div>
          {/*Footer  */}
        <footer>
          <div className='footer-bg'>
            <div className='footer-logo'>
              <img src={myimg}></img>
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <span>FOLLOW US ON</span>
              <p className='icon1'>  
                  <i><FaFacebookF></FaFacebookF></i>
                  <i><FaTwitter></FaTwitter></i>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                  <i><FaLinkedin></FaLinkedin></i>
                  <i><TiSocialInstagram></TiSocialInstagram></i>
                  <i><CiYoutube></CiYoutube></i>
                  <i><BsWhatsapp></BsWhatsapp></i>
                </p>
            </div>
            <div className='row2'>
              <p>FEATURE LINKS</p>
                <ul>
                <li><i><FaHandPointRight></FaHandPointRight></i>About Us</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Blogs</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Join Us</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Company Login</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</li>
                </ul>
            </div>
            <div className='row3'>
              <p className='contact' >CONTACT US</p>
              <h4>HEAD OFFICE - YOGICHOWK</h4>
              <p className='address'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p className='number'>Mo : +91 90333 16003</p>
              <h4>OTHER BRANCHES</h4>
              <ul>
                <li><i><FaUniversity></FaUniversity></i>Katargam</li>
                <li><i><FaUniversity></FaUniversity></i>Mota Varachha</li>
                <li><i><FaUniversity></FaUniversity></i> Adajan</li>
                <li><i><FaUniversity></FaUniversity></i> Navsari</li>
                </ul>
            </div>
          </div>
        </footer>
      </div>
      
    )
}

export default App;
