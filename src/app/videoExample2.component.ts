import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { reverse, accelerate } from "@cloudinary/url-gen/actions/effect";
import { brightness } from "@cloudinary/url-gen/actions/adjust";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import { Concatenate } from "@cloudinary/url-gen/qualifiers/concatenate";

@Component({
  selector: "example2-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./app.component.css"]
})
export class VideoExample2Component implements OnInit {
  vid!: CloudinaryVideo;

  title =
    "Apply several transformations to the snowboarding video, as shown in";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#example_2";
  heading = "Example 2";

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

    // Use the video with public ID, 'ski_jump'.
    this.vid = cld.video("ski_jump");

    // Apply the transformation.
    this.vid
      .videoEdit(
        concatenate(
          Concatenate.videoSource("ski_jump").transformation(
            new Transformation().effect(reverse())
          )
        )
      )
      .videoEdit(
        concatenate(
          Concatenate.videoSource("ski_jump").transformation(
            new Transformation().effect(accelerate(-50))
          )
        )
      )
      .adjust(brightness(10))
      .roundCorners(max());
  }
}
