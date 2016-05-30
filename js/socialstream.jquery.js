/* 
 * Widgets for Social Network photo stream.
 * 
 * Version: 1.1
 *
 */


(function($){  
    $.fn.socialstream = function(options) {  
        var defaults = {  
            
        };  
        var options = $.extend(defaults, options);  
      
        return this.each(function() {  
            var object = $(this); 
            switch(options.socialnetwork){
                
                
                case 'instagram':
                    object.append("<ul class=\"instagram-list\"></ul>")
                    var access_token = "200718541.a4734ab.cc050fa16d6141bf8b709c97ab158f57";						
                    url =  "https://api.instagram.com/v1/users/search?q=" + options.username + "&access_token=" + access_token + "&count=1&callback=?";
                    $.getJSON(url, function(data){
						
                        $.each(data.data, function(i,shot){
                            var instagram_username = shot.username;
                            if (instagram_username == options.username){
                                var user_id = shot.id;
									  
                                if (user_id != ""){	
                                    url =  "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?access_token=" + access_token + "&count=" + options.limit + "&callback=?";
                                    $.getJSON(url, function(data){
                                        $.each(data.data, function(i,shot){
                                            var photo_src = shot.images.thumbnail.url;
                                            var photo_url = shot.link;                                            

                                            var photo_title = "";
                                            if (shot.caption != null){
                                                photo_title = shot.caption.text;
                                            }
											  
                                            var photo_container = $('<img/>').attr({
                                                src: photo_src, 
                                                alt: photo_title
                                            });
                                            var url_container = $('<a/>').attr({
                                                href: photo_url, 
                                                target: '_blank', 
                                                title: photo_title
                                            });
                                            var tmp = $(url_container).append(photo_container);
                                            if(options.overlay){
                                                var overlay_div = $('<div/>').addClass('img-overlay');
                                                $(url_container).append(overlay_div);
                                            }
                                            var li = $('<li/>').append(tmp);
                                            $("ul", object).append(li);
						
                                        });
                                    });
                                }   
                            }
                        });
                    });		
                    break;
                
            }
        });  
    };  
})(jQuery);