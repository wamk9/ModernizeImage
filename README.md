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

## Customizing 

When initialized ModernizeImage use some attribs by default, but you can change that! Below you have all attribs used by this script.

| Attrib | Description | Type | Default | Markup Attrib Example 
| --- | --- | --- | --- | --- | 
| `dataBg` | This attrib references *data-bg* (background-image) option at [LazyLoad By Verlok](https://github.com/verlok/lazyload) repository, i recommend you to use default. **REMEMBER: The HTML attrib is setted automatically by ModernizeImage, don't insert in HTML Tag.** | string | data-bg | data-bg="/img/helloword.webp"
| `dataDisplayType` | Used only to use *background-image*. You need set "background" in value to use background-image with ModernizeImage. | string | data-display-type | data-display-type="background"
| `dataHasWebP` | ModernizeImage use this attrib to confirm if WebP image exists in folder. Use *TRUE* if exists or *FALSE* if doesn't. | string | data-has-webp | data-has-webp="true"
| `dataImgFolder` | Attrib responsable to get folder path, without slasg at end. | string | data-img-folder | data-img-folder="/img"
| `dataImgFormat` | Attrib responsable to get image format, without dot at start. | string | data-img-format | data-img-format="jpg"
| `dataImgName` | Attrib responsable to get image name. | string | data-img-format | data-img-format="jpg"
| `dataLazyLoadIndentifier` | Name of Tag, Class or ID will ModernizeImage are used. | string | .modernize-image | 
| `dataSrc` | This attrib references *data-src* (src attrib at IMG tag) option at [LazyLoad By Verlok](https://github.com/verlok/lazyload) repository, i recommend you to use default. **REMEMBER: The HTML attrib is setted automatically by ModernizeImage, don't insert in HTML Tag.** | string | data-src | data-src="/img/helloword.webp"
| `debug` | Need confirm if are all fine? Set to TRUE to active Debug mode in ModernizeImage and [LazyLoad By Verlok](https://github.com/verlok/lazyload). | boolean | false | 

