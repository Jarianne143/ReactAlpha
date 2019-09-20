import React from 'react';

const Dashboard = () => { 
    function onClickFireEvent(e){
        let recipient = $('#recipient-name')[0].value,
            message = $('#message-text')[0].value,
            string = `${recipient}: \x3Cbr /> ${message}`; 
        $('#updateText').text(string);
    }
    return(
        <div className="container-fluid">
            <div className="row no-x-p">
                <div className="col-sm-12 col-lg-7">
                    <div className="card">
                        <div className="card-header">
                            Buttons
                        </div>
                        <div className="card-body">
                            <div className="bd-example">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Primary</button>
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-light">Light</button>
                                <button type="button" className="btn btn-dark">Dark</button>
                                <button type="button" className="btn btn-link">Link</button>
                            </div>
                            <figure className="highlight">
                                <pre>
                                    <code className="language-html" data-lang="html">
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span><br />
                                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-link"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/button&gt;</span>
                                    </code>
                                </pre>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            Alerts
                        </div>
                        <div className="card-body">
                            <div className="bd-example"> 
                                <div className="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                                <div className="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                                <div className="alert alert-success" role="alert">A simple success alert—check it out!</div>
                                <div className="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
                                <div className="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
                                <div className="alert alert-info" role="alert">A simple info alert—check it out!</div>
                                <div className="alert alert-light" role="alert">A simple light alert—check it out!</div>
                                <div className="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
                            </div>
                            <figure className="highlight"> 
                                <pre>
                                    <code className="language-html" data-lang="html">
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-primary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple primary alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span> <br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-secondary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple secondary alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple success alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple danger alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-warning"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple warning alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-info"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple info alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-light"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple light alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-dark"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                                    <br />  A simple dark alert—check it out! <br />
                                    <span className="nt">&lt;/div&gt;</span><br />
                                    </code>
                                </pre>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p id="updateText">Sample</p>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={onClickFireEvent}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard