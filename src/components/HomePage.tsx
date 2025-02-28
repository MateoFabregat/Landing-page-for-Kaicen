import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  background: #000000;
  color: #FFFFFF;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-family: 'Alata', sans-serif;
  font-size: 28px;
  line-height: 1;
  color: #FFFFFF;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 32px;
  border-radius: 50px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
`;

const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);
  margin-top: 0;

  > div {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding-top: 400px;
  }
`;

const HeroTitle = styled.h1`
  width: 656px;
  height: 87px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 52px;
  line-height: 50px;
  color: white;
  text-align: center;
  margin: 0;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  width: 773px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 50px;
  color: white;
  text-align: center;
  margin: 0;
  word-wrap: break-word;
  opacity: 0.8;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 1.6;
  }
`;

const HeroButtons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 23px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

interface HeroButtonProps {
  primary?: boolean;
}

const HeroButton = styled.a<HeroButtonProps>`
  height: 34px;
  padding: 0 22px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 110px;
  border: 2px solid ${props => props.primary ? '#B1B1B1' : 'white'};
  opacity: 0.6;
  text-decoration: none;
  transition: all 0.2s ease;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 50px;
  color: #B1B1B1;
  text-align: center;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;

const FeaturedSection = styled.section`
  position: relative;
  width: 1440px;
  height: 586px;
  margin: 0 auto;
  background: #FFFFFF;
`;

const FeaturedTitle = styled.h2`
  position: absolute;
  width: 727px;
  height: 50px;
  left: calc(50% - 727px/2 + 0.5px);
  top: 100px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  text-align: center;
  color: #141414;
  opacity: 0.8;
`;

const LogosContainer = styled.div`
  position: absolute;
  width: 2018px;
  height: 344px;
  left: -78px;
  top: 242px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 117px;
`;

const LogoImage = styled.img`
  object-fit: contain;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const BenefitsSection = styled.section`
  padding: 80px 0;
  background: #FFFFFF;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const BenefitsTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const BenefitsTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto 40px;
`;

const BenefitTab = styled.button<{ active?: boolean }>`
  font-family: 'Poppins', sans-serif;
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 18px;
  line-height: 1.4;
  color: ${props => props.active ? '#000000' : '#666666'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-bottom: 2px solid ${props => props.active ? '#000000' : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
  }
`;

const BenefitCard = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  margin: 0 auto;
  max-width: 1000px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 32px;
  }
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BenefitImage = styled.div`
  width: 100%;
  height: 400px;
  background: #F5F5F5;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BenefitTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const BenefitDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 32px;
`;

const LearnMoreButton = styled.button`
  background: #000000;
  border-radius: 50px;
  padding: 12px 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: #333333;
    transform: translateY(-1px);
  }
`;

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background: #FFFFFF;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const TestimonialsTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 60px;
  text-transform: uppercase;

  span {
    color: #666666;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 40px;
  max-width: 1000px;
  margin: 0 auto 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #FFFFFF;
  padding: 32px;
  text-align: left;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;

const StarRating = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
`;

const Star = styled.span`
  color: #000000;
  font-size: 18px;
  &:before {
    content: '★';
  }
`;

const TestimonialTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 16px;
`;

const TestimonialText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 24px;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfilePic = styled.div`
  width: 48px;
  height: 48px;
  background: #D9D9D9;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const TestimonialNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
`;

const TestimonialProgress = styled.div`
  width: 200px;
  height: 2px;
  background: rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 33.33%;
    background: #000000;
  }
`;

const TestimonialButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Footer = styled.footer`
  background: #000000;
  padding: 60px 40px 32px;
  color: #FFFFFF;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const FooterLogo = styled(Logo)`
  font-size: 36px;
  margin-bottom: 20px;
`;

const FooterMainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterHeading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: #FFFFFF;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

const FooterDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
`;

const FooterNewsletterForm = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
  width: 100%;
  max-width: 360px;
`;

const FooterInput = styled.input`
  flex: 1;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FooterButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 10px 20px;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
`;

const SocialLink = styled.a`
  color: #FFFFFF;
  font-size: 20px;
  opacity: 0.6;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: #FFFFFF;
  margin-bottom: 6px;
`;

const FooterLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #FFFFFF;
  }
`;

const FooterBottom = styled.div`
  max-width: 1000px;
  margin: 48px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const FooterCopyright = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`;

const ProductsSection = styled.section`
  width: 1440px;
  height: 880px;
  position: relative;
  background: #969696;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProductLeftSide = styled.div`
  width: 720px;
  height: 880px;
  padding: 102.10px 202.62px;
  background: white;
  box-shadow: 0px 3.17px 3.17px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.91px;
`;

const ProductCard = styled.div`
  width: 452.63px;
  height: 541.56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8.89px;
`;

const ProductImage = styled.div`
  width: 452.63px;
  height: 541.56px;
  position: relative;
  background: #969696;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 452.63px;
    height: 441.07px;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const ProductInfo = styled.div`
  width: 188px;
  height: 74.35px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;

const ProductPrice = styled.div`
  text-align: center;
  color: black;
  font-size: 14.23px;
  font-family: 'Poppins', sans-serif;
  font-weight: 275;
  line-height: 44.46px;
`;

const ProductName = styled.div`
  text-align: center;
  color: #141414;
  font-size: 19.56px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 44.46px;
`;

const ProductRightSide = styled.div`
  width: 720px;
  height: 880px;
  position: relative;
  background: #969696;

  &::before {
    content: '';
    position: absolute;
    top: 68px;
    left: 85px;
    width: 550px;
    height: 524px;
    background: rgba(217, 217, 217, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 135px;
    background: #D9D9D9;
  }
`;

const QuoteSection = styled.section`
  width: 1440px;
  height: 880px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  background: #000000;
`;

const QuoteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 102.10px 102.62px;
  background: white;
  height: 100%;
`;

const QuoteText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 24px;
  max-width: 450px;
`;

const QuoteAuthor = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 32px;
`;

const QuoteAuthorText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.5);
`;

const QuoteImage = styled.div`
  width: 100%;
  height: 100%;
  background: #969696;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 68px;
    left: 85px;
    width: 550px;
    height: 524px;
    background: rgba(217, 217, 217, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 135px;
    background: #D9D9D9;
  }
`;

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Detoxification');

  const benefits = [
    {
      title: 'Detoxification',
      description: "Experience the power of natural detoxification through cold therapy. Our ice baths help eliminate toxins, boost circulation, and rejuvenate your body at a cellular level. Regular cold exposure has been scientifically proven to enhance your body's natural detoxification processes.",
      image: '/images/detox-benefit.jpg'
    },
    {
      title: 'Muscle Recovery',
      description: "Accelerate your recovery with our professional-grade ice baths. Cold therapy reduces inflammation, alleviates muscle soreness, and speeds up recovery time after intense workouts. Perfect for athletes and fitness enthusiasts looking to optimize their performance.",
      image: '/images/recovery-benefit.jpg'
    },
    {
      title: 'Mental Health',
      description: "Transform your mental wellbeing through the power of cold exposure. Regular ice bath sessions boost mood, reduce stress, and improve mental clarity by triggering the release of endorphins and norepinephrine. Experience the mental clarity that comes with controlled cold exposure.",
      image: '/images/mental-benefit.jpg'
    },
    {
      title: 'Improved Sleep',
      description: "Enhance your sleep quality naturally with cold therapy. Our ice baths help regulate your body temperature and promote deeper, more restful sleep patterns. Experience the rejuvenating power of better sleep through controlled cold exposure.",
      image: '/images/sleep-benefit.jpg'
    },
    {
      title: 'Heart Health',
      description: "Strengthen your cardiovascular system with regular cold therapy sessions. Our ice baths help improve heart health by enhancing circulation and promoting cardiovascular adaptations. Experience the long-term benefits of a stronger, healthier heart.",
      image: '/images/heart-benefit.jpg'
    }
  ];

  const testimonials = [
    {
      title: 'La Mejor Bañera de Hielo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur fermentum.',
      author: 'Tom Wilson',
      rating: 5
    },
    {
      title: 'Game Changer for Recovery',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur fermentum.',
      author: 'Sarah Johnson',
      rating: 5
    },
    {
      title: 'Exceptional Quality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur fermentum.',
      author: 'Michael Chang',
      rating: 5
    }
  ];

  const products = [
    {
      name: 'Kaicen Cold Plunge',
      price: 'U$ 4600',
      image: '/images/cold-plunge.jpg'
    },
    {
      name: 'Kaicen Ice Bath Pro',
      price: 'U$ 5200',
      image: '/images/ice-bath.jpg'
    }
  ];

  return (
    <HomeContainer>
      <Header>
        <Logo>KAICEN</Logo>
        <Navigation>
          <NavLink href="#shop">SHOP</NavLink>
          <NavLink href="#about-us">ABOUT US</NavLink>
          <NavLink href="#discover">DISCOVER</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        </Navigation>
      </Header>

      <Hero>
        <div>
          <HeroTitle>La Mejor Bañera de Hielo e Inmersión del Mundo</HeroTitle>
          <HeroSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi</HeroSubtitle>
          <HeroButtons>
            <HeroButton href="#shop-plunge" primary>SHOP ICE BATH</HeroButton>
            <HeroButton href="#shop-ice-bath">SHOP PLUNGE</HeroButton>
          </HeroButtons>
        </div>
      </Hero>

      <QuoteSection>
        <QuoteContent>
          <QuoteText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod"</QuoteText>
          <QuoteAuthor>
            <QuoteAuthorText>Lorem Ipsum , Lorem Ipsum</QuoteAuthorText>
          </QuoteAuthor>
        </QuoteContent>
        <QuoteImage />
      </QuoteSection>

      <FeaturedSection>
        <FeaturedTitle>Featured on</FeaturedTitle>
        <LogosContainer>
          <LogoImage src="/images/logo-shield.png" alt="Shield Logo" style={{
            width: '110px',
            height: '171px',
            mixBlendMode: 'luminosity'
          }} />
          <LogoImage src="/images/logo-slar.png" alt="SLAR Logo" style={{
            width: '161px',
            height: '151px',
            mixBlendMode: 'luminosity'
          }} />
          <LogoImage src="/images/logo-olympics.png" alt="Olympics Logo" style={{
            width: '228px',
            height: '156px',
            mixBlendMode: 'luminosity'
          }} />
          <LogoImage src="/images/logo-forbes.png" alt="Forbes Logo" style={{
            width: '218px',
            height: '58px',
            mixBlendMode: 'luminosity'
          }} />
        </LogosContainer>
      </FeaturedSection>

      <ProductsSection>
        <ProductsGrid>
          <ProductLeftSide>
            <ProductCard>
              <ProductImage>
                <ProductInfo>
                  <ProductPrice>U$ 4600</ProductPrice>
                  <ProductName>Kaicen Cold Plunge</ProductName>
                </ProductInfo>
              </ProductImage>
            </ProductCard>
          </ProductLeftSide>
          <ProductRightSide />
        </ProductsGrid>
      </ProductsSection>

      <QuoteSection>
        <QuoteContent>
          <QuoteText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod"</QuoteText>
          <QuoteAuthor>
            <QuoteAuthorText>Lorem Ipsum , Lorem Ipsum</QuoteAuthorText>
          </QuoteAuthor>
        </QuoteContent>
        <QuoteImage />
      </QuoteSection>

      <BenefitsSection>
        <BenefitsTitle>EXPLORE THE BENEFITS</BenefitsTitle>
        <BenefitsTabs>
          {benefits.map(benefit => (
            <BenefitTab
              key={benefit.title}
              active={activeTab === benefit.title}
              onClick={() => setActiveTab(benefit.title)}
            >
              {benefit.title}
            </BenefitTab>
          ))}
        </BenefitsTabs>
        
        {benefits.map(benefit => (
          benefit.title === activeTab && (
            <BenefitCard key={benefit.title}>
              <BenefitContent>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
                <LearnMoreButton>LEARN MORE</LearnMoreButton>
              </BenefitContent>
              <BenefitImage>
                <img src={benefit.image} alt={benefit.title} />
              </BenefitImage>
            </BenefitCard>
          )
        ))}
      </BenefitsSection>

      <TestimonialsSection>
        <TestimonialsTitle>SEE WHAT <span>OUR COMMUNITY</span> IS SAYING</TestimonialsTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <StarRating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </StarRating>
              <TestimonialTitle>{testimonial.title}</TestimonialTitle>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialFooter>
                <ProfilePic />
                <ProfileName>{testimonial.author}</ProfileName>
              </TestimonialFooter>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        <TestimonialNav>
          <TestimonialProgress />
          <TestimonialButton>
            Lorem Ipsum →
          </TestimonialButton>
        </TestimonialNav>
      </TestimonialsSection>

      <Footer>
        <FooterContent>
          <FooterMainSection>
            <FooterLogo>KAICEN</FooterLogo>
            <FooterDescription>
              Transformamos la manera en que las empresas interactúan con sus clientes a través de soluciones digitales innovadoras.
            </FooterDescription>
            <FooterNewsletterForm>
              <FooterInput type="email" placeholder="Tu correo electrónico" />
              <FooterButton>
                Suscribirse
                <ArrowRight size={16} />
              </FooterButton>
            </FooterNewsletterForm>
            <SocialLinks>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.svg" alt="LinkedIn" />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.svg" alt="Twitter" />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="Instagram" />
              </SocialLink>
            </SocialLinks>
          </FooterMainSection>
          
          <FooterSection>
            <FooterTitle>Productos</FooterTitle>
            <FooterLink href="#">Diseño UX/UI</FooterLink>
            <FooterLink href="#">Desarrollo Web</FooterLink>
            <FooterLink href="#">Aplicaciones Móviles</FooterLink>
            <FooterLink href="#">Marketing Digital</FooterLink>
            <FooterLink href="#">Consultoría</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Descubre</FooterTitle>
            <FooterLink href="#">Casos de Éxito</FooterLink>
            <FooterLink href="#">Recursos</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Eventos</FooterLink>
            <FooterLink href="#">Comunidad</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Empresa</FooterTitle>
            <FooterLink href="#">Sobre Nosotros</FooterLink>
            <FooterLink href="#">Carreras</FooterLink>
            <FooterLink href="#">Contacto</FooterLink>
            <FooterLink href="#">Soporte</FooterLink>
            <FooterLink href="#">Términos y Condiciones</FooterLink>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            © 2024 KAICEN. Todos los derechos reservados.
          </FooterCopyright>
        </FooterBottom>
      </Footer>
    </HomeContainer>
  );
};

export default HomePage; 