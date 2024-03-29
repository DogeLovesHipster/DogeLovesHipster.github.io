import GitHubBanner from '../assets/images/GitHubBanner.png';
import PersonalWebsite from '../assets/images/PersonalWebsite.png';

/**
 * Array of banner images with associated text and redirect URLs.
 * @type {Array<Object>}
 */

const bannerImages = [
    {
        image: GitHubBanner,
        text: 'Visit my GitHub!',
        redirect: 'https://github.com/DogeLovesHipster'
    },
    {
        image: PersonalWebsite,
        text: 'Check out my personal website!',
        redirect: 'https://sergiomendozajr.com/'
    }
];

export default bannerImages;