class modernizeImage 
{ 
  constructor(obj)
  {
    if (typeof LazyLoad !== 'function')
      console.error('ERROR: LazyLoad By Verlok (https://github.com/verlok/lazyload) is necessary to execute ModernizeImage, if is implemented, please, put her code before the call of ModernizeImage');
    
    obj = obj || {};
    
    this.dataImgFolder = ((obj.hasOwnProperty('dataImgFolder')) ? obj.dataImgFolder : 'data-img-folder');
    this.dataImgName   = ((obj.hasOwnProperty('dataImgName')) ? obj.dataImgName : 'data-img-name');
    this.dataImgFormat = ((obj.hasOwnProperty('dataImgFormat')) ? obj.dataImgFormat : 'data-img-format');
    
    this.dataHasWebP   = ((obj.hasOwnProperty('dataHasWebP')) ? obj.dataHasWebP : 'data-has-webp');
    
    this.dataBg = ((obj.hasOwnProperty('dataBg')) ? obj.dataImgName : 'data-bg');
    this.dataSrc = ((obj.hasOwnProperty('dataSrc')) ? obj.dataImgName : 'data-src');
    
    this.dataDisplayType = ((obj.hasOwnProperty('displayType')) ? obj.dataImgName : 'data-display-type');

    this.debug = ((obj.hasOwnProperty('debug')) ? obj.debug : false);
    
	  if (this.debug)
      console.log(this);
    
    return this;
  }
  
  insertImage(obj) 
  {
    if (
    obj.hasOwnProperty('dataImgFolder') &&
    obj.hasOwnProperty('dataImgName') &&
    obj.hasOwnProperty('dataImgFormat') &&
    obj.hasOwnProperty('displayType')
    )
    {
      if (this.debug)
      {
        console.log('DEBUG: insertImage({...}) -> Image "' + obj.dataImgFolder + '/' + obj.dataImgName + '.' + obj.dataImgFormat);
      }
    }
    else
    {
      console.error('ERROR: insertImage({...}) -> Some parameters don\'t setted or writed wrong...');
    }
  }
  
  init()
  {      
    this.check_webp_feature('lossy', function (feature, isSupported) 
    {
      var i, imagesElement;
      
      imagesElement = document.querySelectorAll('[data-img-name]');
      
      /* Verify all elements with 'data-img-name' and set the data-src or data-bg for LazyLoad*/
      if (isSupported)
      {
        console.log('Navegador compatível com WebP... Ativando imagens Webp...');

        for(var i = 0, len = imagesElement.length; i < len; i++) 
        {
          // if URI has setted (use .webp and compatible images at same folder)
          if (imagesElement[i].hasAttribute('data-uri') && imagesElement[i].hasAttribute('data-img-name') && imagesElement[i].hasAttribute('data-img-format'))
          {
            var fileUri =  imagesElement[i].getAttribute('data-uri') + '/';
            var fileName = imagesElement[i].getAttribute('data-img-name');
            var fileFormat = '.' + imagesElement[i].getAttribute('data-img-format');
            // Verify if webp file exists, if doesn't, use compatible image
            if (imagesElement[i].getAttribute('data-has-webp') == 'true')
            {
              // Used for background-image
              if (imagesElement[i].getAttribute('data-img-type') == 'bg')
                imagesElement[i].setAttribute('data-bg', 'url(' + fileUri + fileName + '.webp)');              
              // Used for src attrib
              else
                imagesElement[i].setAttribute('data-src', fileUri + fileName + '.webp');
            }
            else
            {
              // Used for background-image
              if (imagesElement[i].getAttribute('data-img-type') == 'bg')
              {
                imagesElement[i].setAttribute('data-bg','url('+ fileUri + fileName + fileFormat + ')');
              }
              // Used for src attrib
              else
              {
                imagesElement[i].setAttribute('data-src', fileUri + fileName + fileFormat);
              }
            }
          }
          // But if you set the filename at JS, the script do it...
          else
          {
            // Used for background-image
            if (imagesElement[i].getAttribute('data-img-type') == 'bg')
            {
              imagesElement[i].setAttribute('data-bg','url('+ imagesWebp[imagesElement[i].getAttribute('data-img-name')]+')');
            }
            
            // Used for src attrib
            if (imagesElement[i].hasAttribute('data-img-name'))
            {
              imagesElement[i].setAttribute('data-src',imagesWebp[imagesElement[i].getAttribute('data-img-name')]);
            }
          }
        }
      }
      else
      { 
        console.log('Navegador NÃO compatível com WebP... Ativando imagens padrões...');

        for(var i = 0, len = imagesElement.length; i < len; i++) 
        {
          // if URI has setted (use .webp and compatible images at same folder)
          if (imagesElement[i].hasAttribute('data-uri') && imagesElement[i].hasAttribute('data-img-name') && imagesElement[i].hasAttribute('data-img-format'))
          {
            var fileUri =  '/' + imagesElement[i].getAttribute('data-uri') + '/';
            var fileName = imagesElement[i].getAttribute('data-img-name');
            var fileFormat = '.' + imagesElement[i].getAttribute('data-img-format');
                      
            // Used for background-image
            if (imagesElement[i].getAttribute('data-img-type') == 'bg')
            {
              imagesElement[i].setAttribute('data-bg','url('+ fileUri + fileName + fileFormat + ')');
            }
            // Used for src attrib
            else
            {
               imagesElement[i].setAttribute('data-src', fileUri + fileName + fileFormat);
            }
          }
          // But if you set the filename at JS, the script do it...
          else
          {
            // Used for background-image
            if (imagesElement[i].getAttribute('data-img-type') == 'bg')
            {
              imagesElement[i].setAttribute('data-bg','url('+imagesWebp[imagesElement[i].getAttribute('data-img-name')]+')');
            }
            // Used for src attrib
            if (imagesElement[i].hasAttribute('data-img-name'))
            {
              imagesElement[i].setAttribute('data-src',imagesWebp[imagesElement[i].getAttribute('data-img-name')]);
            }
          }
        }
      }
    });  
  
	  function logElementEvent(eventName, element) {          
          console.log(
            Date.now(),
            eventName,
            element.getAttribute("data-bg"),
            element.getAttribute("data-src"));
    };
	  
    /* LazyLoad doing what his do (??????) */  
    var callback_enter = function(element) {
      logElementEvent("🔑 ENTERED", element);
    };
    var callback_exit = function(element) {
      logElementEvent("🚪 EXITED", element);
    };
    var callback_reveal = function(element) {
      logElementEvent("👁️ REVEALED", element);
    };
    var callback_loaded = function(element) {
      logElementEvent("👍 LOADED", element);
    };
    var callback_error = function(element) {
      logElementEvent("💀 ERROR", element);
      element.src =
        "https://via.placeholder.com/440x560/?text=Imagem";
    };
    var callback_finish = function() {
      logElementEvent("✔️ FINISHED", document.documentElement);
    };
    
		if (this.debug)
		{
    	var ll = new LazyLoad({
				elements_selector: ".lazy",
				// Assign the callbacks defined above
				callback_enter: callback_enter,
				callback_exit: callback_exit,
				callback_reveal: callback_reveal,
				callback_loaded: callback_loaded,
				callback_error: callback_error,
				callback_finish: callback_finish
			}); 
	  }
		else
		{
			var ll = new LazyLoad({
				elements_selector: ".lazy"
			}); 
		}
  }
  
  
  // check_webp_feature:
  //   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
  //   'callback(feature, isSupported)' will be passed back the detection result (in an asynchronous way!)
  check_webp_feature(feature, callback) 
  {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    
    var img = new Image();
    
    img.onload = function () 
    {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    
    img.onerror = function () 
    {
        callback(feature, false);
    };
    
    img.src = "data:image/webp;base64," + kTestImages[feature];
  }
  
  
}