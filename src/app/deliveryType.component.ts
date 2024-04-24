import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

@Component({
  selector: "delivery-type-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class DeliveryTypeComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Use the fetch delivery type to deliver an image, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#specifying_the_delivery_type";
  heading = "Specifying the delivery type";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the 'fetch' delivery type to deliver an image.
    this.img = cld
      .image(
        "https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png"
      )
      .setDeliveryType("fetch");
  }
}
