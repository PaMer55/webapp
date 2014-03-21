Ext.define('HelloWorld.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [
	           'Ext.TitleBar',
	           'Ext.Video',
	           'Ext.List'
	           ],
	           config: {
	        	   tabBarPosition: 'bottom',

	        	   items: [{
	        		   title: 'Welcome',
	        		   iconCls: 'home',

	        		   styleHtmlContent: true,
	        		   scrollable: true,

	        		   items: {
	        			   docked: 'top',
	        			   xtype: 'titlebar',
	        			   title: 'Welcome to my Sencha Touch App'
	        		   },

	        		   html: [
	        		          "<h2>This is my first Sencha Touch App and here is my code ",
	        		          ">>> <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> <<<</h2> "
	        		          ].join("")
	        	   },
	        	   {
	        		   title: 'Video',
	        		   iconCls: 'action',


	        		   items: [{
	        			   docked: 'top',
	        			   xtype: 'titlebar',
	        			   title: 'Enjoy it',

	        		   },
	        		   {
	        			   html: '<iframe width="1920" height="687" src="//www.youtube.com/embed/n-M-UVjug18" frameborder="0" allowfullscreen></iframe>'
	        		   }]
	        	   },
	        	   {
	        		   xtype: 'carousel',
	        		   title: 'Images',
	        		   iconCls: 'star',
	        		   cls: 'card',

	        		   items: [
	        		           {
	        		        	   xtype: 'image',
	        		        	   src: 'resources/images/pic3.png'
	        		           },
	        		           {
	        		        	   xtype: 'image',
	        		        	   src: 'resources/images/pic2.png'
	        		           },
	        		           {
	        		        	   xtype: 'image',
	        		        	   src: 'resources/images/pic1.jpg'
	        		           }]
	        	   },

	        	   {

	        		   xtype: 'carousel',
	        		   title: 'THM',
	        		   iconCls: 'info',
	        		   cls: 'card',

	        		   items: [{
	        			   xtype: 'image',
	        			   src: 'resources/images/THMLogo.jpg'
	        		   },
	        		   {
	        			   xtype: 'image',
	        			   src: 'resources/images/inversity.png'
	        		   },
	        		   {
	        			   xtype: 'image',
	        			   src: 'resources/images/web.png'
	        		   }]

	        	   }]
	           }
});
