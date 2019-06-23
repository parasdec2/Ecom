import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'


export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio expedita corrupti tempora cumque! Voluptatem deserunt reprehenderit natus ex quod enim cupiditate aperiam eaque error dolorem quo nam, quae dolore modi itaque laudantium molestias, optio esse. Ipsum quisquam molestias nihil, repudiandae reiciendis dolor consequatur unde nostrum aperiam exercitationem quaerat ducimus corporis temporibus quidem corrupti aut vitae. Perferendis necessitatibus id accusantium quaerat?
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
