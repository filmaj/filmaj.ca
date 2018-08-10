/* global ga */
window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments); };
// Error tracking
function trackError (error) {
    ga('send', 'event', Object.assign({
        eventCategory: 'Script',
        eventAction: 'error',
        eventLabel: (error && error.stack) || '(not set)',
        nonInteraction: true
    }, {eventAction: 'uncaught error'}));
}
var loadErrorEvents = (window.__e && window.__e.q) || [];
// Replay any stored load error events.
loadErrorEvents.forEach(function (event) {
    trackError(event.error);
});
// Add a new listener to track event immediately.
window.addEventListener('error', function (event) {
    trackError(event.error);
});
// Extra dimensions to store in GA
var dimensions = {
    BREAKPOINTS: 'dimension1',
    TRACKING_VERSION: 'dimension2',
    CLIENT_ID: 'dimension3'
};
var TRACKING_VERSION = '1';
ga('create', 'UA-27149382-1', 'auto');
ga('require', 'cleanUrlTracker', {
    stripQuery: true,
    indexFilename: 'index.html',
    trailingSlash: 'remove'
});
ga('require', 'impressionTracker', {
    elements: ['work', 'education']
});
ga('require', 'maxScrollTracker', {
    increaseThreshold: 10
});
ga('require', 'mediaQueryTracker', {
    definitions: [{
        name: 'Breakpoints',
        dimensionIndex: dimensions.BREAKPOINTS,
        items: [
            {name: 'sm', media: '(max-width: 320px)'},
            {name: 'md', media: '(min-width: 320px) and (max-width: 600px)'},
            {name: 'lg', media: 'all'}
        ]
    }]
});
ga('require', 'outboundLinkTracker');
ga('require', 'pageVisibilityTracker', {
    sendInitialPageview: true,
    visibleMetricIndex: 1,
    pageLoadsMetricIndex: 2
});
ga('set', 'transport', 'beacon');
ga('set', dimensions.TRACKING_VERSION, TRACKING_VERSION);
ga(function (tracker) {
    var clientId = tracker.get('clientId');
    tracker.set(dimensions.CLIENT_ID, clientId);
});
