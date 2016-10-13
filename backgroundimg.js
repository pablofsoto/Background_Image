define( ["./properties","qlik", "jquery", "text!./backgroundimg.css"],
	function (properties, qlik, $, cssContent ) {
		'use strict';
		$( "<style>" ).html( cssContent ).appendTo( "head" );		

		return {
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 10,
						qHeight: 50
					}]
				}
			},
			definition:properties
			,
			paint: function ( $element, layout ) {			
                

				var BackgroundTrans = layout.background.transparency;
		        var imgurl = layout.background.imgurl; 
				               
				
				var RGBAString = 'rgba(255,255,255,' + BackgroundTrans +')';
 

				if(!imgurl || 0 === imgurl.length) return;
				
				// background Image
				
				$('.qv-panel-content.flex-row').css('background-image', 'url('+imgurl+')');
				
				$('.qvt-sheet').css('background-color',RGBAString); 

				
			}
		};
	} );
