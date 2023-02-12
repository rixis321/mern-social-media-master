import "../../FooterStyle.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>PUDZIANO-POL</h1>
                    <p>United in neighbourhood!</p>
                </div>
                <div>
                    <a href="/client/public">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/client/public">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/client/public">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="/client/public">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/client/public">Changelog</a>
                    <a href="/client/public">Status</a>
                    <a href="/client/public">Licence</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/client/public">GitHub</a>
                    <a href="/client/public">Issues</a>
                    <a href="/client/public">Project</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/client/public">Support</a>
                    <a href="/client/public">Troubleshooting</a>
                    <a href="/client/public">Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/client/public">Terms of Service</a>
                    <a href="/client/public">Privacy Policy</a>
                    <a href="/client/public">Licence</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;