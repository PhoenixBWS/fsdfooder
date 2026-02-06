import styles from './BlogPost.module.css';
import BlogPostHeader from '../../components/BlogPostHeader/BlogPostHeader';
import BlogRelatedHeader from '../../components/BlogRelatedHeader/BlogRelatedHeader';
import BlogGridItem from '../../components/BlogGridItem/BlogGridItem';
import img1 from '/src/assets/blog/0384bb001683a1e0ee3f57fde3ea633f0a8db4ff.avif';
import img2 from '/src/assets/blog/11e20661916d0dbd21a5d340edbcfa2c6a94e42d.avif';
import Footer from '../../components/Footer/Footer';

export default function BlogPost() {
    return (
        <>
            <BlogPostHeader title="The secret tips & tricks to prepare a perfect burger & pizza for our customers" />

            <figure className={styles['blog-post-featured-img']}>
                <div>
                    <img src={img1} alt="Burger and Pizza" />
                </div>
            </figure>
            
            <section className={styles['blog-post-content']}>
                <div className={styles['blog-post-content-inner-div']}>
                    <h2>What do you need to prepare a home-made burger?</h2>
                    <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                    <ol>
                        <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                        <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                        <li><strong>Don’t Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                        <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                        <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                    </ol>
                </div>

                <div className={styles['blog-post-content-inner-div']}>
                    <h2>What are the right ingredients to make it delicious?</h2>
                    <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                    <ol>
                        <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                        <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                        <li><strong>Don’t Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                        <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                        <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                    </ol>
                </div>

                <figure className={styles['blog-post-img']}>
                    <div>
                        <img src={img2} alt="Burger and Pizza" />
                    </div>
                </figure>

                <div className={styles['blog-post-content-inner-div']}>
                    <h2>What are the right ingredients to make it delicious?</h2>
                    <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
                </div>
            </section>

            <section className={styles['blog-post-related']}>
                <BlogRelatedHeader title="Read More Articles" description="We consider all the drivers of change gives you the components you need to change to create a truly happens." />
                
                <div className={styles['blog-related']}>
                    <BlogGridItem
                        imagePath="/src/assets/blog/c57f62c9c2a8b89a7cbb3dee33e0d3fe8117b14d.avif"
                        title="How to prepare a delicious gluten free sushi"
                        y="82%"
                    />
                    
                    <BlogGridItem
                        imagePath="/src/assets/blog/420255a39422fb3e768e8405fe617c5d1029aaf0.avif"
                        title="Exclusive baking lessons from the pastry king"
                        y="82%"
                    />
                    
                    <BlogGridItem
                        imagePath="/src/assets/blog/11e20661916d0dbd21a5d340edbcfa2c6a94e42d.avif"
                        title="How to prepare the perfect fries in an air fryer"
                        y="82%"
                    />
                    
                    <BlogGridItem
                        imagePath="/src/assets/blog/100d5801c991324b3d782647183c9fdb652d8eb4.avif"
                        title="How to prepare delicious chicken tenders"
                        y="28%"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}