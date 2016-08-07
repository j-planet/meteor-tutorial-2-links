import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';    // Match is for custom validation


Meteor.methods({
    'links.insert': function(url)
    {
        // validate
        check(url, Match.Where(url => validUrl.isUri(url)));

        // save the url
        const token = Math.random().toString(36).slice(-5);     // generate token
        console.log('token:', token);
        Links.insert({ url, token, clicks: 0});
    }
});

export const Links = new Mongo.Collection('links');