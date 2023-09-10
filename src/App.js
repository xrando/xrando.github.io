import profile from './static/images/profile.jpg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
    const name = 'Benjamin Loh Choon How';
    const course = 'Bachelor of Science with Honours in Computing Science';
    const email = 'xrando20@gmail.com';
    const phone = '92731310';
    const linkedinLink = 'https://www.linkedin.com/in/benjaminlohchoonhow';
    const githubLink = 'https://github.com/xrando';
    const description = 'With a passion for Technology, I have both the skill set and professional background necessary to dive deep into the Tech world. As an upbeat, self-motivated team player with excellent communication and critical thinking skills as well as being a reliable team leader, I envision an exciting future in the industry. Browse my site and connect with me on LinkedIn to see all that I have to offer!';
    const education = [
        {
            duration: '2022-2025',
            school: 'Singapore Institute of Technology & University of Glasgow',
            certification: 'Bachelor of Science with Honours in Computing Science, Specialise in the Internet of Things (IoT)'
        },
        {
            duration: '2016-2019',
            school: 'Nanyang Polytechnic',
            certification: 'Diploma in Infocomm & Security (Specialization in Network Security)',
        },
        {
            duration: '2012-2015',
            school: 'Ahmad Ibrahim Secondary School',
            certification: 'GCE O Levels',
        }
    ];
    const experience = [
        {
            duration: 'August 2021–July 2022',
            company: 'Commerce Online Pte Ltd',
            position: 'Software Developer',
            skills: 'C# , ASP.NET , SharePoint, Powershell Scripting',
            description: 'I was a member of the project delivery team, participating in all activities in the Software Development Life Cycle of the project which includes coding, deployment, testing and finally preparing documentation. The project I am assigned to allowed me to work with the Ministry of Sustainability and the Environment (MSE) on their intranet portal that was being used. During my time at Commerce Online Pte Ltd, I gained a lot of exposure and got to experience what working as a software developer was really like. Some technical skill sets I have obtained are working with Sharepoint modules and functions to incorporate in an asp.net website, learning how to write powershell scripts to automate processes for the Sharepoint site, learning how to perform patching for Sharepoint servers (Web front end, App server & Office Online Server), acquired communication skills and analytical thinking in the course of work involving use of rigorous logic and methods to solve problems with effective solutions.',
        },
        {
            duration: 'July 2019–July 2021',
            company: 'Singapore Armed Forces (SAF)',
            position: 'Enlistee',
            description: 'Served as an artillery operator at the 23rd battalion Singapore artillery.',
        },
        {
            duration: 'March 2018–May 2018',
            company: 'ST Electronics (Info-Comm Systems)',
            position: 'Software Support Engineer Intern',
            skills: 'Scripting in C, Regression Testing, Software Debugging, Software Documentation',
            description: 'Intern – Software and Hardware Testing\n' +
                'Successfully developed a full featured automation script for testing use cases during development and enhancement phases of the V2 communication device and system. The testing of the V2 system is an important job tasked to me as it would be implemented in tanks by the Singapore Army. The scripting language used for the automation script is the C programming language and the full script was efficiently completed over the span of 2 months. The script automates unit testing as well as integration testing and finally it also automates regression testing. Apart from this, I have also been tasked on carrying out unit, system and regression testing on the V2 hardware due to the limitations of the scripts. These tests require me to carry out tests on the functionality of the microphone that is connected to the V2 devices.',
        }
    ];
    const projects = [
        {
            name: 'Movie Review webapp',
            duration: 'May 2023 - Jul 2023',
            associated_with: 'Singapore Institute of Technology',
            description: 'The movie database is a project created for our database systems module in university, this app serves to display our knowledge learned from this module with regards to utilizing a relational as well as non-relational database to work with a web app. The web app was developed using python/flask and databases used are MongoDB and MariaDB.',
            skills: 'Flask · MongoDB · MariaDB · Python (Programming Language)',
            link: 'https://github.com/xrando/Database-Systems-Project'
        },
        {
            name: 'Steganography in python',
            duration: 'Jun 2023 - Jul 2023',
            associated_with: 'Singapore Institute of Technology',
            description: 'Created a steganography app in Python in a group of 6 as part of a project for my cyber security module. App allows users to hide plaintext in 3 different types of cover objects which includes a text file (word document, excel, txt), image file (bitmap, png, gif), audio file (mp4, wav), app also allows the decoding of this plaintext.',
            skills: 'Python (Programming Language) · Cybersecurity',
            link: 'https://github.com/xrando/CyberSecurityProjects'
        },
        {
            name: 'Banking System in Java',
            duration: 'Jan 2023 - Apr 2023',
            associated_with: 'Singapore Institute of Technology',
            description: 'Developed a banking system in java programming language with a graphical user interface built using java swing. System comes with features including socket programming, user input sanitization and a database that stores records and user accounts.',
            skills: 'Java (Programming Language) · Java Swing · Socket Programming · Database Management',
            link: 'https://github.com/xrando/ATM-in-Java'
        },
        {
            name: 'Tic-Tac-Toe in C',
            duration: 'Oct 2022 - Nov 2022',
            associated_with: 'Singapore Institute of Technology',
            description: 'Developed a Tic-Tac-Toe game in C programming language with a graphical user interface built using GTK 4 and game comprises of 3 different game modes. First mode allows 2 players to play Tic-Tac-Toe, second mode allows 1 player to play Tic-Tac-Toe against a computer that utilizes the minimax algorithm and the last mode allows 1 player to play Tic-Tac-Toe against a computer that utilizes a modified minimax algorithm in order for player to have a chance of winning against the computer. Alpha/beta pruning optimization is also implemented to minimax algorithm due to the goal of this game being implemented on a memory and power limited mobile device such as phones or tablets.',
            skills: 'C (Programming Language) · GTK · Minimax Algorithm · Alpha-Beta Pruning',
            link: 'https://github.com/xrando/TicTacToe-in-C'
        },
        {
            name: 'Password Manager web application',
            duration: 'Aug 2023 - Aug 2023',
            associated_with: 'Singapore Institute of Technology',
            description: 'Developed a password manager web application while trying to learn the Django framework. The web application is built on the Django framework and utilizes tailwind CSS along with flowbite, frontend renders information from data stored in SQLite. Passwords are encrypted and saved in the database and decrypted using the same secret key generated and both utilizes the fernet python library.',
            skills: 'Django · Tailwind CSS · SQLite · Python (Programming Language)',
            link: 'https://github.com/xrando/PasswordManager'
        },
    ];
    const awards = [
        {
            title: 'Code Olympics (GUTS Hackathon) - First Place',
        },
        {
            title: 'Hackrift 2022 - Participant',
        },
        {
            title: 'Director\'s List 2018/19 Semester 2',
        },
        {
            title: 'Edusave Certificate of academic achievement 2019',
        },
        {
            title: 'Edusave Merit Bursary 2019',
        },
        {
            title: 'Director\'s List 2017/18 Semester 2',
        },
        {
            title: 'Edusave Certificate of academic achievement 2018',
        },
        {
            title: 'Edusave Merit Bursary 2018',
        },
        {
            title: 'Edusave Merit Bursary 2017',
        },
    ];
    const skills = ['Programming Languages: Python, Java, C, C#, BashScript, PowershellScript', 'Web Development: HTML, CSS, JavaScript, Django, Codeigniter4/PHP, Flask', 'Database Management: SQL, MongoDB'];
    return (
        <div className="container mx-auto p-8">
            <header className="text-center mb-6">
                <img src={profile} alt="Profile Picture" className="w-24 h-24 mx-auto rounded-full mb-4"/>
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-gray-600">{course}</p>
            </header>

            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
                <address className="text-gray-600">
                    Email: {email}<br/>
                    Phone: {phone}<br/>
                    <div className="mt-2">
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-linkedin fa-lg mr-2"></i> LinkedIn
                        </a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-gray-800 ml-4">
                            <i className="fab fa-github fa-lg mr-2"></i> GitHub
                        </a>
                    </div>
                </address>
            </section>

            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold mb-3">About me</h2>
                <p className="text-gray-600">{description}</p><br/>
            </section>

            <section className="bg-white rounded-lg shadow p-6 mb-6" id="education">
                <h2 className="text-lg font-semibold mb-3">Education</h2>
                {education.map((item, index) => (
                    <div key={index}>
                        {item.duration}<br/>
                        <p className="text-gray-600 mb-4"><strong>{item.school}</strong><br/>
                            {item.certification}<br/>
                        </p>
                    </div>
                ))}
            </section>

            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold mb-3">Experience</h2>
                {experience.map((item, index) => (
                    <div key={index}>
                        {item.duration}<br/>
                        <p className="text-gray-600 mb-4"><strong>{item.company}</strong><br/>
                            {item.position}<br/>
                            {item.description}<br/>
                            {item.skills && (
                                <strong>Skills: {item.skills}<br/></strong>
                            )}
                        </p>
                    </div>
                ))}
            </section>

            <section className="bg-white rounded-lg shadow p-6 mb-6" id="projects">
                <h2 className="text-lg font-semibold mb-3">Projects</h2>
                {projects.map((item, index) => (
                    <div key={index}>
                        {item.duration}<br/>
                        <p className="text-gray-600 mb-4"><strong>{item.name}</strong><br/>
                            {item.associated_with}<br/>
                            {item.description && (
                                <span>{item.description}<br/></span>
                            )}
                            <strong>{item.skills}</strong><br/>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-blue-500">
                                    <i className="fas fa-link fa-lg mr-2"></i> View Repository
                                </a>
                            )}
                        </p>
                    </div>
                ))}
            </section>

            <section className="bg-white rounded-lg shadow p-6 mb-6" id="awards">
                <h2 className="text-lg font-semibold mb-3">Awards</h2>
                <ul className="list-disc">
                    {awards.map((item, index) => (
                        <li key={index} className="text-gray-600 mb-4">
                            {item.title}<br/>
                            {item.issuer && (
                                <span>{item.issuer}<br/></span>
                            )}
                            {item.issuedDate && (
                                <span>{item.issuedDate}<br/></span>
                            )}
                            {item.description && (
                                <span>{item.description}<br/></span>
                            )}
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-blue-500">
                                    <i className="fas fa-link fa-lg mr-2"></i> View Certificate
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-lg shadow p-6" id="skills">
                <h2 className="text-lg font-semibold mb-3">Skills</h2>
                <ul className="list-disc list-inside text-gray-600">
                    {skills.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
