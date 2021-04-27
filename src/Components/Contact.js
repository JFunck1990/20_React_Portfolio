import React from "react";

function Contact(){

    return(
<div>

  <section className="mb-4">


    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>

    <p className="text-center w-responsive mx-auto mb-5"> Have any questions? Please do not hesitate to contact me directly.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                <div className="row">


                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>


                </div>


                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control">
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>



                <div className="row">


                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>



        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Charlotte, NC 28209, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 (704) 400-4431</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>jackfunck21@gmail.com</p>
                </li>
            </ul>
        </div>


    </div>

</section>


</div>

    );
}

export default Contact