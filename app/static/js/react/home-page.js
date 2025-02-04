var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}

homeSliderElements = {
    0: React.createElement(
        "div",
        { className: "slider-panel" },
        React.createElement(
            "div",
            { className: "d-flex w-700-center" },
            React.createElement(
                "div",
                { className: "col-md-4 mx-auto" },
                React.createElement("img", { className: "headshot", height: "280", width: "200", src: "/static/images/basic/headshot_2.png" })
            ),
            React.createElement(
                "div",
                { className: "col-md-4 mx-auto" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    { className: "font-size-110" },
                    React.createElement(
                        "strong",
                        null,
                        "Name:"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        "Steven Schweinhart"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "strong",
                        null,
                        "Age:"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        getAge("1992/09/23"),
                        " years"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "strong",
                        null,
                        "Location:"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        "Louisville, KY, USA"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "w-700-center text-justify font-size-125" },
            React.createElement(
                "p",
                { className: "my-5" },
                "I am a software engineer based in Louisville KY that enjoys building tools to solve problems. This includes projects like recreating classic video games, building furniture, and creating websites."
            ),
            React.createElement(
                "p",
                { className: "my-5" },
                "Over the past decade as a software engineer, I have built up a collection of projects scattered around. This has made it difficult to showcase my work at its best. I plan on using this domain to host all of my ideas in one place. "
            ),
            React.createElement(
                "p",
                { className: "my-5" },
                "When I'm not sitting in front of a screen I find myself exploring on my bike, distracted online, enjoying a bottle of wine, or finding an excuse to cook Indian food (chicken curry and naan is my weakness)."
            )
        )
    ),
    1: React.createElement(
        "div",
        { className: "slider-panel" },
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left" },
                React.createElement("img", { src: "/static/images/logos/humana.png" })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://www.humana.com", target: "_blank" },
                        "Humana"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "Software Engineer - Since 2018"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "Steven works as a Software Engineer inside the Digital Health & Analytics Organization. His primary responsibilities include migrating legacy analytics solutions to Microsoft Azure; productionizing machine learning models using Python, Databricks, and Azure Functions; and implementing libraries to facilitate data science projects. Secondary responsibilities include dev ops engineering, infrastructure automation, linux system administration, and support engineering."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left" },
                React.createElement("img", { src: "/static/images/logos/glasscapitol.png" })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://glasscapitol.org", target: "_blank" },
                        "The Glass Capitol"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "CTO/Cofounder - 2016-2018"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "The Glass Capitol is a digital civic engagement platform dedicated to helping grassroots organizations effectively leverage their collective voice. As CTO Steven's focus was leading the development of the website's technical framework.  This included designing and building the site back-end using Google App Engine and Python; leading a team of developers with site development; and creating the site's front-end using HTML5, CSS, and AngularJS. "
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left" },
                React.createElement("img", { src: "/static/images/logos/humanamilitary.png" })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://www.humanamilitary.com/", target: "_blank" },
                        "Humana Military"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "Applications Engineer \u2013 2016-2018"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "At Humana Military Steven worked as a member of a BI reporting team. His responsibilities involved creating and maintaining reports for both government and business users. Data movement and ingestion was performed with SSIS, data querying was performed with MS SQL, and the reports were generated using Actuate E.Report software and Microsoft Excel."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left", style: { background: "none" } },
                React.createElement("img", { src: "/static/images/logos/speedschool.jpeg", style: { maxWidth: "300px", maxHeight: "200px", borderRadius: "40px" } })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://louisville.edu/speed/computer", target: "_blank" },
                        "University of Louisville J.B. Speed School of Engineering"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "M.Eng. Computer Engineering & Computer Science \u2013 2016"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "Steven's graduate year at U of L was challenging, expanding his knowledge of computer engineering topics like machine learning, parallel programming, and network security. For his master's project he applied a genetic learning algorithm to create a lossy compression algorithm. While the resulting algorithm was ineffective as a form of compression, there are several pathways for improvement."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left" },
                React.createElement("img", { src: "/static/images/logos/louisville.png" })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://louisville.edu/speed/computer", target: "_blank" },
                        "University of Louisville J.B. Speed School of Engineering"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "B.S. Computer Engineering & Computer Science \u2013 2011-2015"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "University of Louisville is where Steven fostered his love for engineering. His course work taught the foundations of computer science that Steven needed in his day to day work as a computer engineer. He was able to grow my skills through projects such as creating a doodlebot, training an AI to play Tetris, and creating VR video games."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left" },
                React.createElement("img", { src: "/static/images/logos/siemens.png" })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://www.mobility.siemens.com/mobility/global/en/rail-solutions/rail-automation/pages/rail-automation.aspx", target: "_blank" },
                        "Siemens Rail Automation"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "Cooperative Education Intern \u2013 2013-2015"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "During his undergraduate years at UofL, Steven participated in their co-operative education program as an intern at Siemens Rail Automation. Over three semesters, he designed and constructed a Factory Testing Simulator for a subway interlocking control project. Steven also redesigned the testing simulator for training subway operators upon installation of the final interlocking project."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "experience-cell-wrap" },
            React.createElement(
                "div",
                { className: "experience-cell-left", style: { background: "none" } },
                React.createElement("img", { src: "/static/images/logos/manual.png", style: { maxWidth: "300px", maxHeight: "200px", borderRadius: "40px" } })
            ),
            React.createElement(
                "div",
                { className: "experience-cell-right" },
                React.createElement(
                    "h5",
                    { className: "home-section-subhead" },
                    React.createElement(
                        "a",
                        { href: "https://louisville.edu/speed/computer", target: "_blank" },
                        "duPont Manual High School"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead1 font-green" },
                    "Diploma: Math, Science, & Technology Magnet \u2013 2007-2011"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-subhead2 font-grey" },
                    "Louisville, KY"
                ),
                React.createElement(
                    "div",
                    { className: "home-section-p" },
                    "Participating in the Math, Science, and Technology (MST) magnet at Manual was a strenuous 4 years that pushed Steven to adapt and grow into an adult. He enjoyed and learned a lot from extracurricular activities like Science Fair, Science Olympiad, and Key Club. He also discovered my love for computer programming at Manual, leading him to pursue it in college and later in his career."
                )
            )
        )
    ),
    2: React.createElement(
        "div",
        { className: "slider-panel" },
        React.createElement(
            "div",
            { className: "interests-panel-section-whole" },
            React.createElement(
                "div",
                { className: "interests-panel-image-row" },
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/angularjs_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/docker_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/gcp_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/git_tint.png" })
                )
            ),
            React.createElement(
                "div",
                { className: "interests-panel-image-row" },
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/hadoop_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/java_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/python_tint.png" })
                ),
                React.createElement(
                    "div",
                    { className: "interests-image-wrap" },
                    React.createElement("img", { className: "interests-image", src: "/static/images/logos/spark_tint.png" })
                )
            )
        ),
        React.createElement(
            "div",
            _defineProperty({ className: "d-flex" }, "className", "interests-panel-list-wrapper"),
            React.createElement(
                "div",
                { className: "interests-panel-section" },
                React.createElement(
                    "h4",
                    null,
                    "Day to Day Experience"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Data Engineering"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Natural Language Processing"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Azure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Python"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Serverless Computing"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "NoSQL Databases"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Databricks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Pyspark"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "HTML5/CSS3"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Javascript/AJAX"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Git"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "REST APIs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Full Stack Web Development"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Azure Dev Ops"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Docker"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "React"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "interests-panel-section" },
                React.createElement(
                    "h4",
                    null,
                    "Other Experience"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Google Cloud Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Machine Learning"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "AngularJs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Java"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "C/C++"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "C#"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Cyber Security"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Terraform"
                    )
                )
            )
        )
    ),
    3: React.createElement(
        "div",
        { className: "slider-panel" },
        React.createElement(
            "div",
            { id: "vol-table" },
            React.createElement(
                "div",
                { className: "vol-row" },
                React.createElement(
                    "div",
                    { className: "vol-cell" },
                    React.createElement(
                        "h5",
                        { className: "home-section-subhead3 font-orange" },
                        "Kentuckians for the Commonwealth"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead1 font-green" },
                        "Member and Work Team Coordinator"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead2 font-grey" },
                        "Since 2017; Louisville, KY"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "vol-cell" },
                    React.createElement(
                        "h5",
                        { className: "home-section-subhead3 font-orange" },
                        "Code Louisville"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead1 font-green" },
                        "Python Cohort Mentor"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead2 font-grey" },
                        "2017-2018; Louisville, KY"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "vol-cell" },
                    React.createElement(
                        "h5",
                        { className: "home-section-subhead3 font-orange" },
                        "Josie Raymond for KY State House"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead1 font-green" },
                        "Campaign Volunteer"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead2 font-grey" },
                        "2018; Jeffersontown, KY"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "vol-row" },
                React.createElement(
                    "div",
                    { className: "vol-cell" },
                    React.createElement(
                        "h5",
                        { className: "home-section-subhead3 font-orange" },
                        "Ryan Fenwick for Mayor"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead1 font-green" },
                        "Campaign Volunteer"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead2 font-grey" },
                        "2018; Louisville, KY"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "vol-cell" },
                    React.createElement(
                        "h5",
                        { className: "home-section-subhead3 font-orange" },
                        "Boy Scouts of America"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead1 font-green" },
                        "Eagle Scout Project"
                    ),
                    React.createElement(
                        "div",
                        { className: "home-section-subhead2 font-grey" },
                        "2010; Louisville, KY"
                    )
                )
            )
        )
    )
};

var MenuContainer = function (_React$Component) {
    _inherits(MenuContainer, _React$Component);

    function MenuContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuContainer.__proto__ || Object.getPrototypeOf(MenuContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeIndex: 0
        }, _this.homeSliderSelect = function (index) {
            _this.setState({ activeIndex: index });
            ReactDOM.render(homeSliderElements[index], document.getElementById('home-slider-panel-wrap'));
            document.getElementById("home-slider-panel").scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuContainer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "d-flex" },
                React.createElement(MenuClickable, { index: 0, name: "About", isActive: this.state.activeIndex === 0, onClick: this.homeSliderSelect }),
                React.createElement(MenuClickable, { index: 1, name: "Experience", isActive: this.state.activeIndex === 1, onClick: this.homeSliderSelect }),
                React.createElement(MenuClickable, { index: 2, name: "Skills", isActive: this.state.activeIndex === 2, onClick: this.homeSliderSelect }),
                React.createElement(MenuClickable, { index: 3, name: "Volunteerism", isActive: this.state.activeIndex === 3, onClick: this.homeSliderSelect })
            );
        }
    }]);

    return MenuContainer;
}(React.Component);

var MenuClickable = function (_React$Component2) {
    _inherits(MenuClickable, _React$Component2);

    function MenuClickable() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, MenuClickable);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = MenuClickable.__proto__ || Object.getPrototypeOf(MenuClickable)).call.apply(_ref2, [this].concat(args))), _this2), _this2.homeSliderSelect = function () {
            return _this2.props.onClick(_this2.props.index);
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(MenuClickable, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                {
                    className: this.props.isActive ? 'thick-bottom-border slider-header-cell' : 'slider-header-cell',
                    onClick: this.homeSliderSelect
                },
                React.createElement(
                    "h4",
                    null,
                    this.props.name
                )
            );
        }
    }]);

    return MenuClickable;
}(React.Component);

// Load the first window by default


ReactDOM.render(homeSliderElements[0], document.getElementById('home-slider-panel-wrap'));
ReactDOM.render(React.createElement(MenuContainer, null), document.getElementById('home-slider-header'));