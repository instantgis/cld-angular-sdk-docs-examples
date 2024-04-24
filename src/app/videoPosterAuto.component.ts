// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

@Component({
  selector: "poster-auto-video",
  templateUrl: "./videoPosterAuto.component.html",
  styleUrls: ["./app.component.css"]
})
export class VideoPosterAutoComponent implements OnInit {
  vid!: CloudinaryVideo;

  title = " Set the cldPoster property to auto, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#the_cldposter_property";
  heading = "The cldPoster property";

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

    // Use the video with public ID, 'docs/walking_talking'.
    this.vid = cld.video("docs/walking_talking");

    // Apply the transformation.
    this.vid
      .resize(
        fill()
          .width(150)
          .height(150)
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
          )
      ) // Crop the video, focusing on the faces.
      .roundCorners(byRadius(20)); // Round the corners.
  }
}
