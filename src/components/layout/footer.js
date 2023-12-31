import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className='footer-area md:pt-[120px] pt-[60px]'>
            <div className='footer-top'>
                <div className='custom-container'>
                    <div className='lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]'>
                        <div className='max-lg:col-span-12'>
                            <div className='footer-logo'>
                                <Image
                                    src='/images/logo/footer-logo.png'
                                    alt='Logo'
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title'>Contact</h2>
                                <ul className='contact-info mt-[25px]'>
                                    <li>
                                       Nairobi, Kenya
                                    </li>
                                    <li>
                                        <Link href='mailto:outlinedesignsltd@gmail.com'>
                                            <a className='hover:text-black '>
                                            outlinedesignsltd@gmail.com
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='tel:+0084-912-3548-073'>
                                            <a className='hover:text-black transition-all'>
                                            (+254) 718 275 068
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title'>Quick Links</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/contact'>Works</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Affiliate</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Shop</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Partners</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title'>Studio</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Career</Link>
                                    </li>
                                    <li>
                                        <Link href='/posts'>Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title'>Help Center</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/about'>FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Help</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='custom-container'>
                    <div className='inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9'>
                        <div className='md:grid md:grid-cols-12 flex flex-col'>
                            <div className='md:col-span-4 max-lm:order-last max-lm:pt-[10px]'>
                                <div className='copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]'>
                                    © 2022 <span className='mx-1'>Outline Designs</span>
                                    Made by
                                    {/* <div className='text-[#f53400] mx-1'>
                                        <AiIcons.AiFillHeart />
                                    </div> */}
                                    <Link href='https://devgriffo.me'>
                                        <a target='_blank'>
                                            <span> GriffiT</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            
<div className='md:col-span-6'>
    <ul className='footer-social-link md:mb-0 mb-[10px]'>
        <li>
            <Link href='https://twitter.com/' passHref>
                <a target="_blank">Twitter</a>
            </Link>
        </li>
        <li>
            <Link href='https://facebook.com/' passHref>
                <a target="_blank">Facebook</a>
            </Link>
        </li>
        <li>
            <Link href='https://instagram.com/' passHref>
                <a target="_blank">Instagram</a>
            </Link>
        </li>
        <li>
            <Link href='https://www.linkedin.com/company/outlinedesigns/' passHref>
                <a target="_blank">LinkedIn</a>
            </Link>
        </li>
        <li>
            <Link href='https://pinterest.com/' passHref>
                <a target="_blank">Pinterest</a>
            </Link>
        </li>
    </ul>
</div>





                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
