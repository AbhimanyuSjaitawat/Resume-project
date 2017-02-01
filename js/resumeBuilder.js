/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("Abhimanyu Singh Jaitawat");
 var awesomeThoughts = "I am Abhimanyu and I am AWESOME";
 console.log(awesomeThoughts);
funThought = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThought);*/

var bio = {
    "name" : "Abhimanyu Singh",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "9414197616",
        "email" : "abhisjaitawat@gmail.com",
        "github" : "https://github.com/AbhimanyuSjaitawat",
        "twitter" : "@im_asjaitawat",
        "location" : "Jaipur"
    },
    "welcomeMessage" : "Hi, Welcome to my resume page!",
    "skills" :["Programming" , " HTML" , " CSS" , " JavaScript" , " python"],
    "pic" : "images/me.jpg"
};

var education = {
    "schools" : [{
                        "name" : "Govt Engineering College",
                        "location" : "Bikaner",
                        "degree" : "BTech",
                        "branch" : "CS",
                        "dates" : "August 2013 - April 2017"
                    },
                    {
                        "name" : "DUCAT",
                        "location" : "Jaipur",
                        "degree" : "Java Programmer",
                        "branch" : "CS",
                        "dates" : "2017"
                    }
                ],
    "onlineCourses" : [
                    {
                        "title" : "Programming",
                        "school" : "Udacity",
                        "dates" : "2015-2016",
                        "url" : "http://udacity.com"
                    },
                    {
                        "title" : "Front-End Developer",
                        "school" : "Udacity",
                        "dates" : "2015",
                        "url" : "http://udacity.com"
                    }
                ]
};

var work = {
    "jobs" : [
                {
                    "employer" : "Company-1",
                    "title" : "Jr. Software Developer",
                    "location" : "Delhi",
                    "date" : " jan 2016",
                    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "employer" : "Company-2",
                    "title" : "Jr. Software Developer",
                    "location" : "Mumbai",
                    "date" : " Dec 2017",
                    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
    };

var projects = {
    "projects" : [
                {
                    "title" : "Portfolio",
                    "dates" : "21-01-2017",
                    "description" : "A HTML and CSS project that shows my portfolio. It was my first project.",
                    "images" : [ "asgfa.com","aksbkabs.com" ]
                },
                {
                    "title" : "Resume",
                    "dates" : "26-01-2017",
                    "description" : "A HTML, CSS and JavaScript based project. It shows my resume.",
                    "images" : [ "asgfa.com","aksbkabs.com" ]
                }
    ]
};

var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);

//var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)
//$("#topContacts").prepend(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").prepend(formattedGithub);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);


var WelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(WelcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
$("#header").append(formattedPic);
if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills-h3").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills-h3").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills-h3").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills-h3").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills-h3").append(formattedSkill);
}


function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formatteddates = HTMLworkDates.replace("%data%",work.jobs[job].date);
        $(".work-entry:last").append(formatteddates);

        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formatteddescription);

        }
}
displayWork();

function SchoolsData(){
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        $(".education-entry:last").prepend(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDegree = HTMLschoolMajor.replace("%data%",education.schools[school].branch);
        $(".education-entry:last").append(formattedDegree);

    }

    for (course in education.onlineCourses){
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedURL);
    }

}

SchoolsData();


projects.display = function(){
    for(p in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);

        /*if(projects.projects[p].images.length > 0){
            for (project in projects.projects){
                var formattedImages = HTMLprojectImage.replace("%data%",projects.projects.images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }*/
    }
}
projects.display();
/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});*/
/*function inName(name){
    var finalName = name;
    var pos  = name.indexOf(" ");
    finalName = name.charAt(0).toUpperCase()+name.slice(1,pos).toLowerCase()+" "+name.slice(pos+1).toUpperCase();
    return finalName;
}*/

function locationizer(work_obj) {
    var myLocations = [];
    for (var i in work_obj.jobs) {
        var loc = work_obj.jobs[i].location;
        myLocations.push(loc);
    }
    return myLocations;
}

$("#main").append(internationalizeButton);



$("#mapDiv").append(googleMap);
/*
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var HTMLheaderRole = '<span>%data%</span><hr>';
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var HTMLMobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLEmail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLTwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLGithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLLocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLBioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLSkillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLSkills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var formattedMobile = HTMLMobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLEmail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLTwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLGithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLLocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLBioPic.replace("%data%",bio.pic);
$("#header").append(formattedBiopic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
}
//$("#main").append(work.position);
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%",work.title);
var formattedHTMLworkDates = HTMLworkDates.replace("%data%",work.dates);
var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%",work.location);
var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%",work.description);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedworkEmployer);
$("#workExperience").append(formattedHTMLworkTitle);
$("#workExperience").append(formattedHTMLworkDates);
$("#workExperience").append(formattedHTMLworkLocation);
$("#workExperience").append(formattedHTMLworkDescription);

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var formattedschoolName = HTMLschoolName.replace("%data%",education.schoolName);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schoolDegree);
var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schoolDates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schoolLocation);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schoolMajor);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedschoolName);
$("#education").append(formattedschoolDegree);
$("#education").append(formattedschoolLocation);
$("#education").append(formattedschoolMajor);
*/
