import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { scale } from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: "media-event-video",
  templateUrl: "./videoPlay.component.html",
  styleUrls: ["./app.component.css"]
})
export class MediaEventVideoComponent implements OnInit {
  vid!: CloudinaryVideo;

  playFunction() {
    alert("Video started");
  }

  title = "Call a function on play, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#html_media_events";
  heading = "HTML media events";

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      },
      url: {
        analytics: false
      }
    });

    // Instantiate a CloudinaryVideo object for the video with public ID, 'elephants'.
    this.vid = cld.video("elephants");

    // Scale the video to a width of 400 pixels.
    this.vid.resize(scale().width(400));
  }
}
