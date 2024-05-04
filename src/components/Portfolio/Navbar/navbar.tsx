"use client";
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

type PortnavProps = {}

const Portnav = (props: PortnavProps) => {
    let myFunction = () => {
        var x = document.getElementById("myDIV");
        if (x) {
            if (x.style.display === "none") {
                var scroll = $(window).scrollTop();
                x.style.display = "block";
                x.classList.remove("widthZero");
                if (scroll !== undefined && scroll > 500) {
                    var element = document.getElementById("myDIV");
                    if (element) {
                        element.classList.add("addition");
                        element.style.zIndex = "10";
                        element.style.zIndex = "1";
                    }
                } else {
                    var element = document.getElementById("myDIV");
                    if (element) {
                        element.classList.remove("addition");
                        document.documentElement.scrollTop = 0;
                    }
                }
            } else {
                x.style.display = "none";
            }
        }
    }
    return (
        <>
            <nav id={styles.shadow}>
                <div className={styles.container}>
                    <button onClick={myFunction}>
                        <div className={styles.button}><i className={`${styles.fa} ${styles.fabars}`}></i></div>
                        <div className={styles.menu}>MENU</div>
                    </button>
                    <div className={styles.logo}>
                        <div className={styles.part1}><Link href="#">P</Link></div>
                        <div className={styles.part2}><Link href="">awan Kumar Gupta</Link></div>
                    </div>
                    <ul className={styles.ulist} id={styles.mydiv}>
                        <li><Link className={`${styles.underlineanimation} ${styles.active}`} href="#home">Home</Link></li>
                        <li><Link className={styles.underlineanimation} href="#about">About</Link></li>
                        <li><Link className={styles.underlineanimation} href="#resume">Resume</Link></li>
                        <li><Link className={styles.underlineanimation} href="#project">Programs</Link></li>
                        <li><Link className={styles.underlineanimation} href="#contact">Contact</Link>
                            {/* <!-- <ul class="inner">
                    <li><a href="#contactus">contact</li></a>
                  </ul> --> */}
                        </li>
                    </ul>
                </div>
            </nav>
            <div id={styles.myDIV}>
                <ul className={styles.divlist}>
                    <li><Link className={`${styles.underlineanimation} ${styles.close}`} href="#home" >Home</Link></li>
                    <li><Link className={`${styles.underlineanimation} ${styles.close}`} href="#about">About</Link></li>
                    <li><Link className={`${styles.underlineanimation} ${styles.close}`} href="#resume">Resume</Link></li>
                    <li><Link className={`${styles.underlineanimation} ${styles.close}`} href="#project">Programs</Link></li>
                    <li><Link className={`${styles.underlineanimation} ${styles.close}`} href="#contact">Contact</Link>
                        {/* <ul className="inner">
                            <li><a href="#contactus">contact</li></a>
                        </ul> */}
                    </li>
                </ul >
            </div >
        </>
    )
}

export default Portnav
