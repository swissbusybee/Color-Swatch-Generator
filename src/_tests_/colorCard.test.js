import { render, screen } from "@testing-library/react";
import ColorCard from "../components/colorCard";

describe("Color Card", () => {
  test("renders color card", () => {
    render(<ColorCard itemData={item} key={item.id} />);
    const colorCardComponent = screen.getByTestId("color-card");
    expect(colorCardComponent).toBeInTheDocument();
  });

  test("color card button is displayed", async () => {
    render(<ColorCard itemData={item} key={item.id} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test.skip("includes color from data in header", () => {
    render(<ColorCard itemData={item} key={item.id} />);
    const { container } = render(<ColorCard itemData={item} key={item.id} />);
    expect(container).toHaveValue("#0c2626");
  });
});

const item = {
  id: "P86-JPbDnPY",
  created_at: "2016-07-23T03:46:57-04:00",
  updated_at: "2022-02-15T00:00:47-05:00",
  promoted_at: "2016-07-23T03:46:57-04:00",
  width: 4000,
  height: 6000,
  color: "#0c2626",
  blur_hash: "LFA^E=NZ5%r]-pofWUNa0yxa,[N@",
  description: null,
  alt_description: "selective focus photography of pink petaled flower",
  urls: {
    raw: "https://images.unsplash.com/photo-1469259943454-aa100abba749?ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA\u0026ixlib=rb-1.2.1",
    full: "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA\u0026ixlib=rb-1.2.1\u0026q=85",
    regular:
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
    small:
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
    thumb:
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
    small_s3:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1469259943454-aa100abba749",
  },
  links: {
    self: "https://api.unsplash.com/photos/P86-JPbDnPY",
    html: "https://unsplash.com/photos/P86-JPbDnPY",
    download:
      "https://unsplash.com/photos/P86-JPbDnPY/download?ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA",
    download_location:
      "https://api.unsplash.com/photos/P86-JPbDnPY/download?ixid=MnwyOTUzMDl8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY0NDk1NDg2NA",
  },
  categories: [],
  likes: 2544,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: "eEjUz1bT49c",
    updated_at: "2022-02-15T09:51:11-05:00",
    username: "ethanrobertson",
    name: "Ethan Robertson",
    first_name: "Ethan",
    last_name: "Robertson",
    twitter_username: "EROB1911",
    portfolio_url: null,
    bio: null,
    location: "Roseville California ",
    links: {
      self: "https://api.unsplash.com/users/ethanrobertson",
      html: "https://unsplash.com/@ethanrobertson",
      photos: "https://api.unsplash.com/users/ethanrobertson/photos",
      likes: "https://api.unsplash.com/users/ethanrobertson/likes",
      portfolio: "https://api.unsplash.com/users/ethanrobertson/portfolio",
      following: "https://api.unsplash.com/users/ethanrobertson/following",
      followers: "https://api.unsplash.com/users/ethanrobertson/followers",
    },
    profile_image: {
      small:
        "https://images.unsplash.com/profile-1473054442026-7a3ee1ee2f06?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
      medium:
        "https://images.unsplash.com/profile-1473054442026-7a3ee1ee2f06?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
      large:
        "https://images.unsplash.com/profile-1473054442026-7a3ee1ee2f06?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
    },
    instagram_username: "_ethanrobertson",
    total_collections: 2,
    total_likes: 57,
    total_photos: 19,
    accepted_tos: true,
    for_hire: false,
    social: {
      instagram_username: "_ethanrobertson",
      portfolio_url: null,
      twitter_username: "EROB1911",
      paypal_email: null,
    },
  },
  tags: [
    {
      type: "landing_page",
      title: "flower",
      source: {
        ancestry: {
          type: {
            slug: "images",
            pretty_slug: "Images",
          },
          category: {
            slug: "nature",
            pretty_slug: "Nature",
          },
          subcategory: {
            slug: "flower",
            pretty_slug: "Flower",
          },
        },
        title: "Flower Images",
        subtitle: "Download free flower images",
        description:
          "Choose from a curated selection of flower photos. Always free on Unsplash.",
        meta_title:
          "500+ Flower Pictures [HD] | Download Free Images on Unsplash",
        meta_description:
          "Choose from hundreds of free flower pictures. Download HD flower photos for free on Unsplash.",
        cover_photo: {
          id: "fsdWYNTymjI",
          created_at: "2017-08-15T11:10:43-04:00",
          updated_at: "2022-02-12T05:01:57-05:00",
          promoted_at: "2017-08-16T11:26:28-04:00",
          width: 2942,
          height: 4119,
          color: "#f3f3f3",
          blur_hash: "L6R{lY-;_N%MtRofIUogtlofMwWB",
          description:
            "It’s a personal opinion of mine that the more a flower fades, the more beautiful it becomes.",
          alt_description: "pink rose flower",
          urls: {
            raw: "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
            regular:
              "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max",
            small:
              "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max",
            thumb:
              "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1502809737437-1d85c70dd2ca",
          },
          links: {
            self: "https://api.unsplash.com/photos/fsdWYNTymjI",
            html: "https://unsplash.com/photos/fsdWYNTymjI",
            download: "https://unsplash.com/photos/fsdWYNTymjI/download",
            download_location:
              "https://api.unsplash.com/photos/fsdWYNTymjI/download",
          },
          categories: [],
          likes: 2527,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: null,
          topic_submissions: {},
          user: {
            id: "AZlDcT0kEKM",
            updated_at: "2022-02-11T21:59:44-05:00",
            username: "theheartdept",
            name: "Tanalee Youngblood",
            first_name: "Tanalee",
            last_name: "Youngblood",
            twitter_username: null,
            portfolio_url: null,
            bio: "Hi! I’m Tanalee. I'm a Believer, a wife, a mom, a US Army Veteran, a carpenter, a graphic designer, a photographer.  I AM a creative! ",
            location: "Northern Kentucky",
            links: {
              self: "https://api.unsplash.com/users/theheartdept",
              html: "https://unsplash.com/@theheartdept",
              photos: "https://api.unsplash.com/users/theheartdept/photos",
              likes: "https://api.unsplash.com/users/theheartdept/likes",
              portfolio:
                "https://api.unsplash.com/users/theheartdept/portfolio",
              following:
                "https://api.unsplash.com/users/theheartdept/following",
              followers:
                "https://api.unsplash.com/users/theheartdept/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1502809342539-1dd464200dd4?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
              medium:
                "https://images.unsplash.com/profile-1502809342539-1dd464200dd4?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
              large:
                "https://images.unsplash.com/profile-1502809342539-1dd464200dd4?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
            },
            instagram_username: "theheartdept",
            total_collections: 5,
            total_likes: 59,
            total_photos: 18,
            accepted_tos: false,
            for_hire: false,
            social: {
              instagram_username: "theheartdept",
              portfolio_url: null,
              twitter_username: null,
              paypal_email: null,
            },
          },
        },
      },
    },
    {
      type: "landing_page",
      title: "floral",
      source: {
        ancestry: {
          type: {
            slug: "wallpapers",
            pretty_slug: "HD Wallpapers",
          },
          category: {
            slug: "nature",
            pretty_slug: "Nature",
          },
          subcategory: {
            slug: "floral",
            pretty_slug: "Floral",
          },
        },
        title: "HD Floral Wallpapers",
        subtitle: "Download Free Floral Wallpapers",
        description:
          "Choose from a curated selection of floral wallpapers for your mobile and desktop screens. Always free on Unsplash.",
        meta_title: "Floral Wallpapers: Free HD Download [500+ HQ] | Unsplash",
        meta_description:
          "Choose from hundreds of free floral wallpapers. Download HD wallpapers for free on Unsplash.",
        cover_photo: {
          id: "XjX3Ju1jFfU",
          created_at: "2018-09-01T21:12:15-04:00",
          updated_at: "2022-02-14T17:04:35-05:00",
          promoted_at: "2018-09-04T09:12:42-04:00",
          width: 5553,
          height: 4016,
          color: "#f3f3f3",
          blur_hash: "LKSr}*f+?w%1xuofV@Ri.8s:IANG",
          description:
            "This is not a photoshopped image - I create these with layers of glass and photograph it on a white background.",
          alt_description: "bouquet of assorted flowers vector graphic",
          urls: {
            raw: "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
            regular:
              "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max",
            small:
              "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max",
            thumb:
              "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535850579364-952ef600d22e",
          },
          links: {
            self: "https://api.unsplash.com/photos/XjX3Ju1jFfU",
            html: "https://unsplash.com/photos/XjX3Ju1jFfU",
            download: "https://unsplash.com/photos/XjX3Ju1jFfU/download",
            download_location:
              "https://api.unsplash.com/photos/XjX3Ju1jFfU/download",
          },
          categories: [],
          likes: 1613,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: null,
          topic_submissions: {},
          user: {
            id: "zKou8F1Vm1o",
            updated_at: "2022-02-14T20:25:32-05:00",
            username: "evieshaffer",
            name: "Evie S.",
            first_name: "Evie",
            last_name: "S.",
            twitter_username: "evies",
            portfolio_url: "https://www.instagram.com/evieshaffer",
            bio: 'Lover of art and nature. All work done in-camera, no Photoshop. \r\nSupport: paypal.me/eviesphoto "We see according to habits.  The role of art is to wrest us free of such habits." ',
            location: "U.S.A.",
            links: {
              self: "https://api.unsplash.com/users/evieshaffer",
              html: "https://unsplash.com/@evieshaffer",
              photos: "https://api.unsplash.com/users/evieshaffer/photos",
              likes: "https://api.unsplash.com/users/evieshaffer/likes",
              portfolio: "https://api.unsplash.com/users/evieshaffer/portfolio",
              following: "https://api.unsplash.com/users/evieshaffer/following",
              followers: "https://api.unsplash.com/users/evieshaffer/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
              medium:
                "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
              large:
                "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
            },
            instagram_username: "evieshaffer",
            total_collections: 8,
            total_likes: 143,
            total_photos: 222,
            accepted_tos: true,
            for_hire: true,
            social: {
              instagram_username: "evieshaffer",
              portfolio_url: "https://www.instagram.com/evieshaffer",
              twitter_username: "evies",
              paypal_email: null,
            },
          },
        },
      },
    },
    {
      type: "search",
      title: "plant",
    },
  ],
};
