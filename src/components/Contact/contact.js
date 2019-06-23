import React from 'react'
import Heading from "../Reuseable/Heading"


export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/parasgarg.github@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                        <input type="email" name="email" id="email" placeholder="Your Email-Id" className="form-control"/>
                        <input type="mobile" name="mobile" id="mobile" placeholder="Your Mobile number" className="form-control"/>
                        <textarea type="text" name="description" id="description" placeholder="Your Message" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block form-control">Submit</button>
                    
                </form>
            </div>
        </section>
    )
}
