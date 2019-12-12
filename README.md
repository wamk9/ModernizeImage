# ModernizeImage

## How Do I Use This?

Well my buddy, it's simple (but it means some hardwork), after you install the [LazyLoad By Verlok](https://github.com/verlok/lazyload) and ModernizeImage, all you need to do is execute the script...

```
window.onload  = function ()
{ 
  var modernizeImageObj = new modernizeImage({debug: true});

  modernizeImageObj.render(); 
};
```

Yeah, the debug attrib on exemple is only to demonstrate how it works, you don't need anything else. But do you remember that "hardwork"? I will show you where it is.
```
<img class="modernize-image" data-img-folder="/img" data-img-name="helloworld" data-img-format="jpg" data-has-webp="true">  
```
The attribs say itself and i know, it's a lot of code, but with this you can change automatically the JPG/PNG image to WebP and save a lot of megabytes in your website (but just if the browser supports and, of course, the WebP file exists at the same folder).

But if you want to use in a **background-image**, you can use this code:
```
<span class="modernize-image" data-img-folder="/img" data-img-name="helloworld" data-img-format="jpg" data-has-webp="true" data-display-type="background">
```
