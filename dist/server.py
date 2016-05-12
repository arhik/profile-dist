#!/usr/bin/env python3.5
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os
import motor.motor_tornado
from tornado import gen
import json

root = os.path.dirname(__file__)
from tornado.options import define, options
define("port", default=3000, help="run on the given port", type=int)


from bson import json_util
db = motor.motor_tornado.MotorClient().arhik
fs = motor.motor_tornado.MotorGridFS(db)

class BlogsHandler(tornado.web.RequestHandler):
    async def get(self):
        db = self.settings['db']
        blogs = db.blogs.find()
        self.set_header("Content-Type", "application/json")
        bloglist = []
        # self.write('[')
        # self.write(json.dumps(blogs), default=json_util.default)
        async for blog in blogs:
        	bloglist.append(blog)
        self.write(json.dumps(bloglist,default=json_util.default))
        self.finish()

class ImagesHandler(tornado.web.RequestHandler):
	async def get(self, image):
		db = self.settings['db']
		gridout = await fs.get_last_version(filename=image)
		image = await gridout.read()
		self.write(image)
		self.finish()

class Blend4WebIntro(tornado.web.RequestHandler):
	# @gen.coroutine
	async def get(self):
		db = self.settings['db']
		# fs = self.settings['fs']
		gridout = await fs.get_last_version(filename='untitled.html')
		content = await gridout.read()
		self.write(content)

if __name__ == "__main__":
	tornado.options.parse_command_line()
	app = tornado.web.Application(handlers=[
				(r"/images/([^/]+)", ImagesHandler),
				(r'/blend4WebIntro', Blend4WebIntro),
				(r"/blogs", BlogsHandler),
				(r"/(.*)", tornado.web.StaticFileHandler,\
				{"path":root, "default_filename":"index.html"})
											], debug=True, db=db)
	http_server = tornado.httpserver.HTTPServer(app)
	http_server.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()
