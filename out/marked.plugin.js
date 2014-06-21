// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var MarkedPlugin;
    return MarkedPlugin = (function(_super) {
      __extends(MarkedPlugin, _super);

      function MarkedPlugin() {
        return MarkedPlugin.__super__.constructor.apply(this, arguments);
      }

      MarkedPlugin.prototype.name = 'marked';

      MarkedPlugin.prototype.config = {
        markedOptions: {
          pedantic: false,
          gfm: true,
          sanitize: false,
          highlight: null
        }
      };

      MarkedPlugin.prototype.render = function(opts, next) {
        var config, inExtension, marked, outExtension, renderer;
        config = this.config;
        inExtension = opts.inExtension, outExtension = opts.outExtension;
        if ((inExtension === 'md' || inExtension === 'markdown') && (outExtension === null || outExtension === 'html')) {
          marked = require('marked');
          marked.setOptions(config.markedOptions);
          if (config.markedRenderer) {
            renderer = new marked.Renderer();
            Object.keys(config.markedRenderer).forEach(function(key) {
              return renderer[key] = config.markedRenderer[key];
            });
            return marked(opts.content, {
              renderer: renderer
            }, function(err, result) {
              opts.content = result;
              return next(err);
            });
          }
          return marked(opts.content, function(err, result) {
            opts.content = result;
            return next(err);
          });
        } else {
          return next();
        }
      };

      return MarkedPlugin;

    })(BasePlugin);
  };

}).call(this);
