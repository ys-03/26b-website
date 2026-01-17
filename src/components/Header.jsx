
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="page-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="icon-circle me-2">
                                <img src="/bjbz_icon.webp" alt="北京八中校徽" className="img-fluid rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="icon-circle ms-2">
                                <img src="/shao26b_icon.jpg" alt="少26B班徽" className="img-fluid rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4 mb-2">
                            <span className="school-name">北京八中</span>
                            <span className="class-name">少26B班</span>
                        </h1>
                    </div>
                    <div className="col-md-2 text-end">
                        <Link to="/contact" className="contact-btn">
                            <i className="fas fa-envelope contact-icon"></i>
                            <span className="contact-text">联系我们</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
