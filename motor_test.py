#!/usr/bin/env python3.5
import tornado
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os
import motor.motor_tornado
import pprint
import json
from bson import json_util
db = motor.motor_tornado.MotorClient().arhik


class BlogsHandler(tornado.web.RequestHandler):
    async def get(self):
        db = self.settings['db']
        blogs = db.blogs.find()
        self.set_header("Content-Type", "application/json")
        async for blog in blogs:
            self.write(json.dumps(blog,default=json_util.default))
        # self.write(str(blogs))
        # self.finish()
        
class MainHandler(tornado.web.RequestHandler):
    pass
    # async def get(self):
    #     db = self.settings['db']
    #     result = await db.movie.insert({"01":"Highway"})
    #     list = db.movie.find()
    #     async for document in db.movie.find():
    #         pprint.pprint(document)
    #     self.write({'id': repr(result)})
    # async def post(self):
    #     db = self.settings['db']
    #     data = self.request.body
    #     result = await db.user.insert({"data":data})
    #     print(result)
application = tornado.web.Application([
    (r'/', MainHandler),
    (r'/blogs', BlogsHandler)
], db=db)

application.listen(8888)
tornado.ioloop.IOLoop.instance().start()
