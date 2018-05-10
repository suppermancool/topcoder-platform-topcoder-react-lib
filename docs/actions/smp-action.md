# smp action
Action for smp.

My submissions management page specific actions.

/*  TODO: At this moment we don't need any special JS code to download
    submissions: we get them from legacy Topcoder Studio API, which is
    authenticated by cookies, and can be done with a simple <a> link in
    the component. Soon we'll migrate to use the new TC API instead, and
    then we'll decide, whether we need operate downloads in JS, or can we
    just remove this action. */
function downloadSubmission(tokens, type, submissionId)