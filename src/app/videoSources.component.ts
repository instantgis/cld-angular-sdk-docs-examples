import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";

import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";

@Component({
  selector: "sources-video",
  templateUrl: "./videoSources.component.html",
  styleUrls: ["./app.component.css"]
})
export class VideoSourcesComponent implements OnInit {
  vid!: CloudinaryVideo;

  sources = [
    {
      type: "mp4",
      codecs: ["avc1.4d002a"],
      transcode: videoCodec(auto())
    },
    {
      type: "webm",
      codecs: ["vp8", "vorbis"],
      transcode: videoCodec(vp9())
    }
  ];

  title = "Set sources explicitly in a video, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#sources";
  heading = "advanced-video properties";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      },
      url: {
        analytics: false
      }
    });

    // Use the video with public ID, 'dog'.
    this.vid = cld.video("dog");
  }
}
