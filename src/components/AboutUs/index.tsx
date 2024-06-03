import './AboutUs.css'
import witch from '../../assets/witch.png'
import knight from '../../assets/knight.png'
import { Link } from 'react-router-dom'
import stamp2 from '../../assets/stamp2.png'

export const AboutUs = () => {
    return (
        <section id='sectionAbout' className='about-us-section'>
            <div className='about-us-container'>
                <div className='witch-n-knight'>
                    <div>
                        <Link className='knight' to='/theknight'>
                            <img src={knight} />
                        </Link>
                    </div>
                    <div>
                        <Link className='witch' to='/thewitch'>
                            <img src={witch} />
                        </Link>
                    </div>
                </div>
                <div className='about-us-text'>
                    <h2>About Us</h2>
                    <p>Welcome to our <span>ethereal witchcraft</span> webstore!</p>
                    <p>This project is being developed with great care and dedication, aiming to bring some magic into the digital world.</p>
                    <p>We're a couple of software developers working together to improve our habilities in React, TS and API and this webstore is a small reflection of how is it going. All the images used here were found online and are not of our authorship. The sales are not real, however, we found online inspiration in real webstores where you can find amazing and magical products.</p>
                    <p>We're thankfull for your stay and hope you enjoy the magical experience. Click the images for more information about us.</p>
                    <p>Ethereal hugs,</p>
                    <div>
                        <p>— The Knight & The Witch</p>
                        <img src={stamp2} />
                    </div>
                </div>
            </div>
        </section>
    )
}