import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os

root = os.path.dirname(__file__)
from tornado.options import define, options
define("port", default=3000, help="run on the given port", type=int)
		

if __name__ == "__main__":
	tornado.options.parse_command_line()
	app = tornado.web.Application(handlers=[(r"/(.*)", tornado.web.StaticFileHandler,\
				{"path":root, "default_filename":"index.html"})
											], debug=True)
	http_server = tornado.httpserver.HTTPServer(app)
	http_server.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()
