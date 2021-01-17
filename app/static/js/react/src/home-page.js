function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

homeSliderElements = {
    0:(
        <div className='slider-panel'>
            <div className="d-flex w-700-center">
                <div className="col-md-4 mx-auto">
                    <img className='headshot' height="280" width="200" src='/static/images/basic/headshot_2.png' />
                </div>
                <div className="col-md-4 mx-auto">
                    <br /><br />
                    <p className="font-size-110">
                        <strong>Name:</strong><br />
                        <span>Steven Schweinhart</span><br />
                        <strong>Age:</strong><br />
                        <span>{ getAge("1992/09/23") } years</span><br />
                        <strong>Location:</strong><br />
                        <span>Louisville, KY, USA</span>
                    </p>
                </div>
            </div>
            <div className='w-700-center text-justify font-size-125'>
                <p className='my-5'>I am a software engineer based in Louisville KY that enjoys building tools to solve problems. This includes projects like recreating classic video games, building furniture, and creating websites.</p>
                <p className='my-5'>Over the past decade as a software engineer, I have built up a collection of projects scattered around. This has made it difficult to showcase my work at its best. I plan on using this domain to host all of my ideas in one place. </p>
                <p className='my-5'>When I'm not sitting in front of a screen I find myself exploring on my bike, distracted online, enjoying a bottle of wine, or finding an excuse to cook Indian food (chicken curry and naan is my weakness).</p>
            </div>
        </div>
    ),
    1: (
        <div className='slider-panel'>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left'>
                    <img src='/static/images/logos/humana.png' />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://www.humana.com' target='_blank'>Humana</a></h5>
                    <div className='home-section-subhead1 font-green'>Software Engineer - Since 2018</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>Steven works as a Software Engineer inside the Digital Health & Analytics Organization. His primary responsibilities include migrating legacy analytics solutions to Microsoft Azure; productionizing machine learning models using Python, Databricks, and Azure Functions; and implementing libraries to facilitate data science projects. Secondary responsibilities include dev ops engineering, infrastructure automation, linux system administration, and support engineering.</div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left'>
                    <img src='/static/images/logos/glasscapitol.png' />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://glasscapitol.org' target='_blank'>The Glass Capitol</a></h5>
                    <div className='home-section-subhead1 font-green'>CTO/Cofounder - 2016-2018</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>The Glass Capitol is a digital civic engagement platform dedicated to helping grassroots organizations effectively leverage their collective voice. As CTO Steven's focus was leading the development of the website's technical framework.  This included designing and building the site back-end using Google App Engine and Python; leading a team of developers with site development; and creating the site's front-end using HTML5, CSS, and AngularJS. </div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left'>
                    <img src='/static/images/logos/humanamilitary.png' />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://www.humanamilitary.com/' target='_blank'>Humana Military</a></h5>
                    <div className='home-section-subhead1 font-green'>Applications Engineer – 2016-2018</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>At Humana Military Steven worked as a member of a BI reporting team. His responsibilities involved creating and maintaining reports for both government and business users. Data movement and ingestion was performed with SSIS, data querying was performed with MS SQL, and the reports were generated using Actuate E.Report software and Microsoft Excel.</div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left' style={{background: "none"}}>
                    <img src='/static/images/logos/speedschool.jpeg' style={{maxWidth: "300px", maxHeight: "200px", borderRadius: "40px"}} />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://louisville.edu/speed/computer' target='_blank'>University of Louisville J.B. Speed School of Engineering</a></h5>
                    <div className='home-section-subhead1 font-green'>M.Eng. Computer Engineering & Computer Science – 2016</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>Steven's graduate year at U of L was challenging, expanding his knowledge of computer engineering topics like machine learning, parallel programming, and network security. For his master's project he applied a genetic learning algorithm to create a lossy compression algorithm. While the resulting algorithm was ineffective as a form of compression, there are several pathways for improvement.</div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left'>
                    <img src='/static/images/logos/louisville.png' />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://louisville.edu/speed/computer' target='_blank'>University of Louisville J.B. Speed School of Engineering</a></h5>
                    <div className='home-section-subhead1 font-green'>B.S. Computer Engineering & Computer Science – 2011-2015</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>University of Louisville is where Steven fostered his love for engineering. His course work taught the foundations of computer science that Steven needed in his day to day work as a computer engineer. He was able to grow my skills through projects such as creating a doodlebot, training an AI to play Tetris, and creating VR video games.</div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left'>
                    <img src='/static/images/logos/siemens.png' />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://www.mobility.siemens.com/mobility/global/en/rail-solutions/rail-automation/pages/rail-automation.aspx' target='_blank'>Siemens Rail Automation</a></h5>
                    <div className='home-section-subhead1 font-green'>Cooperative Education Intern – 2013-2015</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>During his undergraduate years at UofL, Steven participated in their co-operative education program as an intern at Siemens Rail Automation. Over three semesters, he designed and constructed a Factory Testing Simulator for a subway interlocking control project. Steven also redesigned the testing simulator for training subway operators upon installation of the final interlocking project.</div>
                </div>
            </div>
            <div className='experience-cell-wrap'>
                <div className='experience-cell-left' style={{background: "none"}}>
                    <img src='/static/images/logos/manual.png' style={{maxWidth: "300px", maxHeight: "200px", borderRadius: "40px"}} />
                </div>
                <div className='experience-cell-right'>
                    <h5 className='home-section-subhead'><a href='https://louisville.edu/speed/computer' target='_blank'>duPont Manual High School</a></h5>
                    <div className='home-section-subhead1 font-green'>Diploma: Math, Science, & Technology Magnet – 2007-2011</div>
                    <div className='home-section-subhead2 font-grey'>Louisville, KY</div>
                    <div className='home-section-p'>Participating in the Math, Science, and Technology (MST) magnet at Manual was a strenuous 4 years that pushed Steven to adapt and grow into an adult. He enjoyed and learned a lot from extracurricular activities like Science Fair, Science Olympiad, and Key Club. He also discovered my love for computer programming at Manual, leading him to pursue it in college and later in his career.</div>
                </div>
            </div>
        </div>
    ),
    2: (
        <div className='slider-panel'>
            <div className='interests-panel-section-whole'>
                <div className='interests-panel-image-row'>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/angularjs_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/docker_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/gcp_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/git_tint.png' /></div>
                </div>
                <div className='interests-panel-image-row'>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/hadoop_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/java_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/python_tint.png' /></div>
                    <div className='interests-image-wrap'><img className='interests-image' src='/static/images/logos/spark_tint.png' /></div>
                </div>
            </div>
            <div className='d-flex' className="interests-panel-list-wrapper">
                <div className='interests-panel-section'>
                    <h4>Day to Day Experience</h4>
                    <ul>
                        <li>Data Engineering</li>
                        <li>Natural Language Processing</li>
                        <li>Microsoft Azure</li>
                        <li>Python</li>
                        <li>Serverless Computing</li>
                        <li>NoSQL Databases</li>
                        <li>Databricks</li>
                        <li>Pyspark</li>
                        <li>HTML5/CSS3</li>
                        <li>Javascript/AJAX</li>
                        <li>Git</li>
                        <li>REST APIs</li>
                        <li>Full Stack Web Development</li>
                        <li>Azure Dev Ops</li>
                        <li>Docker</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='interests-panel-section'>
                    <h4>Other Experience</h4>
                    <ul>
                        <li>Google Cloud Platform</li>
                        <li>Machine Learning</li>
                        <li>AngularJs</li>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>C#</li>
                        <li>Cyber Security</li>
                        <li>Terraform</li>
                    </ul>
                </div>
            </div>
        </div>
    ),
    3: (
        <div className='slider-panel'>
            <div id='vol-table'>
                <div className="vol-row">
                    <div className="vol-cell">
                        <h5 className='home-section-subhead3 font-orange'>Kentuckians for the Commonwealth</h5>
                        <div className='home-section-subhead1 font-green'>Member and Work Team Coordinator</div>
                        <div className='home-section-subhead2 font-grey'>Since 2017; Louisville, KY</div>
                    </div>
                    <div className="vol-cell">
                        <h5 className='home-section-subhead3 font-orange'>Code Louisville</h5>
                        <div className='home-section-subhead1 font-green'>Python Cohort Mentor</div>
                        <div className='home-section-subhead2 font-grey'>2017-2018; Louisville, KY</div>
                    </div>
                    <div className="vol-cell">
                        <h5 className='home-section-subhead3 font-orange'>Josie Raymond for KY State House</h5>
                        <div className='home-section-subhead1 font-green'>Campaign Volunteer</div>
                        <div className='home-section-subhead2 font-grey'>2018; Jeffersontown, KY</div>
                    </div>
                </div>
                <div className="vol-row">
                    <div className="vol-cell">
                        <h5 className='home-section-subhead3 font-orange'>Ryan Fenwick for Mayor</h5>
                        <div className='home-section-subhead1 font-green'>Campaign Volunteer</div>
                        <div className='home-section-subhead2 font-grey'>2018; Louisville, KY</div>
                    </div>
                    <div className="vol-cell">
                        <h5 className='home-section-subhead3 font-orange'>Boy Scouts of America</h5>
                        <div className='home-section-subhead1 font-green'>Eagle Scout Project</div>
                        <div className='home-section-subhead2 font-grey'>2010; Louisville, KY</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

class MenuContainer extends React.Component {
    state = {
        activeIndex: 0
    }
  
    homeSliderSelect = (index) => {
        this.setState({ activeIndex: index });
        ReactDOM.render(
            homeSliderElements[index],
            document.getElementById('home-slider-panel-wrap')
        );
        document.getElementById("home-slider-panel").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
  
    render() {
        return <div className='d-flex'>
            <MenuClickable index={0} name="About" isActive={ this.state.activeIndex===0 } onClick={ this.homeSliderSelect } />
            <MenuClickable index={1} name="Experience" isActive={ this.state.activeIndex===1 } onClick={ this.homeSliderSelect } />
            <MenuClickable index={2} name="Skills" isActive={ this.state.activeIndex===2 } onClick={ this.homeSliderSelect }/>
            <MenuClickable index={3} name="Volunteerism" isActive={ this.state.activeIndex===3 } onClick={ this.homeSliderSelect }/>
        </div>
    }
}
  
class MenuClickable extends React.Component {
    homeSliderSelect = () => this.props.onClick(this.props.index)
    
    render() {
        return <div
        className={
            this.props.isActive ? 'thick-bottom-border slider-header-cell' : 'slider-header-cell'
        }
        onClick={ this.homeSliderSelect }
        >
            <h4>{ this.props.name }</h4>
        </div>
    }
}

// Load the first window by default
ReactDOM.render(
    homeSliderElements[0],
    document.getElementById('home-slider-panel-wrap')
);
ReactDOM.render(<MenuContainer />, document.getElementById('home-slider-header'))
