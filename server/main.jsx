import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';


Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    });
});

function onRoute(req, res, next) {
    // check to see if the token matches anything we have in the DB
    const link = Links.findOne({ token: req.params.token });

    if (link) {
        Links.update(link, { $inc: {clicks: 1} });
        res.writeHead(307, { 'location': link.url });
        res.end();  // finished the request, send the response.
    } else {
        next();
    }
}

const middleware = ConnectRoute((router) =>
{
    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);