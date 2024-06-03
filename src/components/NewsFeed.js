// src/components/NewsFeed.js
import React from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
    return (
        <div className="news-feed">
            <h2>Latest News</h2>
            <p>Stay up to date with the latest news and updates about TechWave XR. Check back often for announcements and exciting news!</p>
            <ul>
                <li>
                    <h3>2024-06-01: TechWave XR Launch Event</h3>
                    <p>Join us for the launch event of TechWave XR on June 15, 2024. We will showcase the amazing features and capabilities of our latest VR technology. Don't miss out on live demonstrations and special launch offers!</p>
                    <a href="https://www.techwave.com/launch-event" target="_blank" rel="noopener noreferrer">Read more</a>
                </li>
                <li>
                    <h3>2024-05-20: Pre-Orders Now Available!</h3>
                    <p>We are excited to announce that pre-orders for TechWave XR are now open. Reserve your device today and be among the first to experience the future of VR. Early birds get a special discount and free shipping!</p>
                    <a href="https://www.techwave.com/pre-order" target="_blank" rel="noopener noreferrer">Pre-order now</a>
                </li>
                <li>
                    <h3>2024-05-10: TechWave XR Wins Best VR Product of 2024</h3>
                    <p>We are proud to share that TechWave XR has been awarded the Best VR Product of 2024. This recognition motivates us to continue pushing the boundaries of VR technology. Thank you to all our supporters!</p>
                    <a href="https://www.techwave.com/awards" target="_blank" rel="noopener noreferrer">Learn more</a>
                </li>
                <li>
                    <h3>2024-04-15: Behind the Scenes: Development of TechWave XR</h3>
                    <p>Ever wondered what goes into developing a cutting-edge VR headset? Take a behind-the-scenes look at the research, innovation, and hard work that brought TechWave XR to life.</p>
                    <a href="https://www.techwave.com/behind-the-scenes" target="_blank" rel="noopener noreferrer">Explore</a>
                </li>
                <li>
                    <h3>2024-03-25: User Testimonials: Real Experiences with TechWave XR</h3>
                    <p>Hear from our beta testers and early users about their experiences with TechWave XR. Discover how our VR technology is making an impact in various fields, from gaming to education.</p>
                    <a href="https://www.techwave.com/testimonials" target="_blank" rel="noopener noreferrer">Read testimonials</a>
                </li>
            </ul>
        </div>
    );
};

export default NewsFeed;
