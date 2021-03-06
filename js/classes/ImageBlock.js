define(['Block'], function(Block){ 
	var ImageBlock = {}; 

	//Page View 
	ImageBlock = Block.extend({ 
		className: Block.prototype.className + ' ImageBlock', 
		defaultCSS: _.extend({}, Block.prototype.defaultCSS, { 
			'& img': { 
				'width':'100%', 
				'height':'100%' 
			} 
		}), 
		initialize: function(options){ 
			Block.prototype.initialize.call(this, options); 
			console.log(options); 
		},
		template: function(dat){ 
			var template, type, txt; 
			template = '', 
			src = dat.src || this.options.src, 
			alt = dat.alt || this.options.alt; 

			template += '<img src="' + src + '" alt="' + alt + '" />'; 
			return _.template(template); 
		}, 
		options:{
			src: 'http://openclipart.org/people/kaleah777/Mustache_Happy_Face_3.svg', 
			alt: 'You should probably fill this in with real text :)', 
		}		
	});  
	return ImageBlock; 
}); 