import React from 'react'
import Heading from "./Heading"
// import {Link} from 'react-router';


export default function DualInfoBlock({ heading }) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam est recusandae odit iste alias amet quaerat consequatur veniam rerum fuga dolorem earum, temporibus voluptas sit. Ullam aliquam reiciendis exercitationem, iusto veritatis esse accusantium debitis perferendis voluptates voluptate magnam officia dicta neque nostrum, saepe nobis facere sit fugit suscipit dolor autem mollitia! Voluptatum eligendi cupiditate dignissimos porro qui sit aut quam excepturi maiores quae, temporibus tempora quaerat fuga molestiae quis rem nulla repellendus animi reiciendis assumenda nam? Hic nam excepturi voluptate facilis incidunt a eligendi repudiandae quas ab nulla! Temporibus impedit velit blanditiis, animi nostrum dicta repellat. Consequatur dolorum est nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, mollitia numquam maxime illum itaque dignissimos facilis enim voluptates quidem! Repellat eaque minus porro. Eius ducimus pariatur repellendus porro! Fugiat laudantium vel unde excepturi dolores dolorum voluptatem. Delectus odit iure maiores fugit. Iste, voluptates tempora perspiciatis veritatis ab repellendus quisquam?</p>
                    </div>
                    <div className="col-4">
                        <div class="card bg-dark">
                            <img src="https://instagram.fixc1-2.fna.fbcdn.net/vp/c04a12e93e71ec021523aac3ae4c6d8d/5DBEBAF2/t51.2885-19/s320x320/58410887_858969841130006_676748281614696448_n.jpg?_nc_ht=instagram.fixc1-2.fna.fbcdn.net" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just Click Photos</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
