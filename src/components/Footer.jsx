import React from 'react';
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
<div className="footer">
    <div className="SocialMedia">
<FacebookIcon/>
<TwitterIcon/>
<InstagramIcon/>
<LinkedInIcon/>
<p>&copy; Kreamkornerrestautaurant.com.</p>
<p>@Nujoom</p>
    </div>
</div>
  )
}

export default Footer
