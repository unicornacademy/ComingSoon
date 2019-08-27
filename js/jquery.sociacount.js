/**
	jQuery Sociacount 0.0.1
	http://zourbuth.com/plugins/sociacount
	Description: Display the media count for facebook, twitter and much more.
	License: GPL
   
    Copyright 2013  zourbuth.com  (email : zourbuth@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
**/
(function(e){e.fn.sociacount=function(t){var n={facebook:"",twitter:"",youtube:"",dribbble:"",forrst:"",github:"",vimeo:"",ajaxurl:"social.php"},r,i,s,r,o;t=e.extend(n,t);ajaxurl=t.ajaxurl;i=this;s={};r={};if(t.facebook){s["facebook"]=t.facebook;r["facebook"]="http://www.facebook.com/"+t.facebook}if(t.twitter){s["twitter"]=t.twitter;r["twitter"]="http://twitter.com/"+t.twitter}if(t.youtube){s["youtube"]=t.youtube;r["youtube"]="http://www.youtube.com/user/"+t.youtube}if(t.dribbble){s["dribbble"]=t.dribbble;r["dribbble"]="http://dribbble.com/"+t.dribbble}if(t.forrst){s["forrst"]=t.forrst;r["forrst"]="http://forrst.com/people/"+t.forrst}if(t.github){s["github"]=t.github;r["github"]="http://github.com/"+t.github}if(t.vimeo){s["vimeo"]=t.vimeo;r["vimeo"]="http://vimeo.com/"+t.vimeo}e(i).append('<span class="loadingsc">Loading...</span>');return this.each(function(){e.each(s,function(t,n){o={};o[t]=n;e.post(ajaxurl,o,function(n){if(n)e('<a title="'+t+'" href="'+r[t]+'">'+t.charAt(0).toUpperCase()+t.slice(1)+"<span>"+n+"</span></a>").appendTo(i).hide().fadeIn()})});e(".loadingsc").fadeTo("slow",0,function(){e(this).animate({width:0},function(){e(this).remove()})})})}})(jQuery)