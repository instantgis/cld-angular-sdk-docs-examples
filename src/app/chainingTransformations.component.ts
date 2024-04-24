import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import required actions.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { north } from "@cloudinary/url-gen/qualifiers/compass";

@Component({
  selector: "chaining-transformations-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class ChainingTransformationsComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Chain several transformations together, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#chaining_transformations";
  heading = "Chaining transformations";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
    this.img = cld.image("sample");

    this.img
      .resize(fill(150, 150))
      .roundCorners(byRadius(20))
      .effect(sepia())
      .overlay(
        source(
          text("This is my picture", new TextStyle("arial", 18)).textColor(
            "white"
          )
        ).position(new Position().gravity(compass(north())).offsetY(20))
      )
      .rotate(byAngle(20))
      .format("png");
  }
}
