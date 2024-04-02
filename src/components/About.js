import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Shivam! 👋'}</h1>
                <blockquote>
                    <p>💻 Mathematics and Computing Undergrad at IIT ISM Dhanbad</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://twitter.com/snhshivam">
                        <img
                            src="https://img.shields.io/twitter/follow/snhshivam?style=social"
                            alt="Twitter: @snhshivam"
                        />
                    </a>
                    <a href="https://github.com/ShivamSingh8853">
                        <img
                            src="https://img.shields.io/github/followers/ShivamSIngh8853?label=follow&style=social"
                            alt="GitHub: @ajaykrmnc"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/shivam-singh-606192204/">
                        <img
                            alt="Linkedin: @shivamsingh"
                            src="https://img.shields.io/badge/-ShivamSingh-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/shivam-singh-606192204/"
                        />
                    </a>
                    <a href="mailto:shivamiitism1@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-@shivamiitism1-red"
                            alt="Gmail: @shivamiitism1"
                        />
                    </a>
    
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>Langauge</td>
                        <td>C, C++</td>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>HTML,CSS, React JS, Bootstrap,TailWind</td>
                    </tr>
                    <tr>
                        <td>BackEnd</td>
                        <td>Node.js, Express</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB (Mongoose), MySQL, Firebase</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Netlify, Postman</td>
                    </tr>
                </table>
                <hr className="about-separator" />
                <h2>⚡ Competitive Programming ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Site</th>
                        <th>Rating</th>
                        <th>Profile</th>
                    </tr>
                    <tr>
                        <td>Hackerrank</td>
                        <td>5*</td>
                        <td><a href="https://www.hackerrank.com/profile/shivam88535929">shivam88535929</a></td>
                    </tr>
                    <tr>
                        <td>Codechef</td>
                        <td>3* (1631)</td>
                        <td><a href="https://www.codechef.com/users/singh88535929">singh88535929</a></td>
                    </tr>
                    <tr>
                        <td>Codeforces</td>
                        <td>Pupil</td>
                        <td><a href="https://codeforces.com/profile/shivam8">shivam8</a></td>
                    </tr>
                    <tr>
                        <td>GeeksforGeeks</td>
                        <td>Points: 629</td>
                        <td><a href="https://auth.geeksforgeeks.org/user/shivam0092t5/practice">shivam0092t5</a></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
