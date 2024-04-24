import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { scale } from "@cloudinary/url-gen/actions/resize";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { opacity } from "@cloudinary/url-gen/actions/adjust";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { southEast } from "@cloudinary/url-gen/qualifiers/compass";

@Component({
  selector: "example1-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./app.component.css"]
})
export class VideoExample1Component implements OnInit {
  vid!: CloudinaryVideo;

  title = "Apply several transformations to the elephant video, as shown in";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#example_1";
  heading = "Example 1";

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

    // Use the video with public ID, 'elephants'.
    this.vid = cld.video("elephants");

    // Apply the transformation.
    this.vid
      .resize(scale().width(0.2))
      .rotate(byAngle(20))
      .overlay(
        source(
          image("cloudinary_icon").transformation(
            new Transformation().resize(scale().width(60)).adjust(opacity(50))
          )
        ).position(
          new Position().gravity(compass(southEast())).offsetX(60).offsetY(15)
        )
      );
  }
}
