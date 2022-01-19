import { Call, Email, GitHub, Instagram, LinkedIn, Person, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import { ContactItem, FCenter, FContainer, FDesc, FLeft, FList, FListItem, FLogo, FRight, FSocialContainer, FSocialIcon, FTitle, Payment } from './FooterElements';

const Footer = () => {
  return (
    <FContainer>
      <FLeft>
        <FLogo>MCA.</FLogo>
        <FDesc>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </FDesc>
        <FSocialContainer>
          <FSocialIcon color='c135ac'>
            <Instagram />
          </FSocialIcon>

          <FSocialIcon color='55ACEE'>
            <Twitter />
          </FSocialIcon>

          <FSocialIcon color='0b2d39'>
            <GitHub />
          </FSocialIcon>

          <FSocialIcon color='0077B5'>
            <LinkedIn />
          </FSocialIcon>

          <FSocialIcon color='be2564'>
            <Person />
          </FSocialIcon>
        </FSocialContainer>
      </FLeft>

      <FCenter>
        <FTitle>Useful Links</FTitle>
        <FList>
          <FListItem>Home</FListItem>
          <FListItem>Cart</FListItem>
          <FListItem>Man Fashion</FListItem>
          <FListItem>Woman Fashion</FListItem>
          <FListItem>Kids Fashion</FListItem>
          <FListItem>Accessories</FListItem>
          <FListItem>My Account</FListItem>
          <FListItem>Order Tracking</FListItem>
          <FListItem>Wishlist</FListItem>
          <FListItem>Terms</FListItem>
        </FList>
      </FCenter>

      <FRight>
        <FTitle>Contact</FTitle>
        <ContactItem><Room style={{marginRight: "10px"}}/> 622 Rosee Way, NE California 98765</ContactItem>
        <ContactItem><Call style={{marginRight: "10px"}}/> +1 234 567 8901</ContactItem>
        <ContactItem><Email style={{marginRight: "10px"}}/> contact@contactme.com</ContactItem>

        <Payment src="https://colonialpatterns.com/product_images/uploaded_images/creditcardlogos.png" />
      </FRight>
    </FContainer>
  )
}

export default Footer;