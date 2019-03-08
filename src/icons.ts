import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';


const icons = [
  faFacebookF, faTwitter, faPinterestP, faLinkedinIn, faGooglePlusG,
  faWhatsapp
];

library.add(...icons);
