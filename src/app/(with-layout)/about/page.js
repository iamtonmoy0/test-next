import Image from "next/image";
import img1 from '@/assets/go.png'

const AboutPage = () => {
	return (
		<div>
			<Image src={img1} placeholder="blur" alt=""/>
		</div>
	);
}
export default AboutPage;