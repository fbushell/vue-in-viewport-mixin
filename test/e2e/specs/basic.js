module.exports = {

  'should have initial state': function (browser) { browser
	  .url('http://localhost:8080/basic/')
    .waitForElementVisible('#app', 1000)

		// The first example should be visible initialy
		.assert.cssClassPresent('.example:nth-child(1)', 'visible')
		.assert.cssClassPresent('.example:nth-child(1)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'above')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'below')

    // The second example should be hidden
    .assert.cssClassNotPresent('.example:nth-child(2)', 'visible')
    .assert.cssClassNotPresent('.example:nth-child(2)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(2)', 'above')
    .assert.cssClassPresent('.example:nth-child(2)', 'below')

	}, 'should no longer be fully visible after 1px of scroll': function (browser) { browser

		// Scroll 1px down
    .execute('scrollTo(0, 1)')

    // First is now partially visible
    .assert.cssClassPresent('.example:nth-child(1)', 'visible')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'fully')
		.assert.cssClassPresent('.example:nth-child(1)', 'above')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'below')

    // And second one is partially visible
		.assert.cssClassPresent('.example:nth-child(2)', 'visible')
    .assert.cssClassNotPresent('.example:nth-child(2)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(2)', 'above')
    .assert.cssClassPresent('.example:nth-child(2)', 'below')

	}, 'should be not be visible after scrolling past it': function (browser) { browser

		// Scroll past first example
		.execute('scrollTo(0, window.innerHeight)')

		// First is now hidden
    .assert.cssClassNotPresent('.example:nth-child(1)', 'visible')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'fully')
		.assert.cssClassPresent('.example:nth-child(1)', 'above')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'below')

    // And second one is fully visible
		.assert.cssClassPresent('.example:nth-child(2)', 'visible')
    .assert.cssClassPresent('.example:nth-child(2)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(2)', 'above')
    .assert.cssClassNotPresent('.example:nth-child(2)', 'below')

  }, 'should be visible again after scrolling back to top': function (browser) { browser

		// Scroll back up to top
		.execute('scrollTo(0, 0)')

		// The first example should be fully visible again
		.assert.cssClassPresent('.example:nth-child(1)', 'visible')
		.assert.cssClassPresent('.example:nth-child(1)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'above')
		.assert.cssClassNotPresent('.example:nth-child(1)', 'below')

    // The second example should be hidden again
    .assert.cssClassNotPresent('.example:nth-child(2)', 'visible')
    .assert.cssClassNotPresent('.example:nth-child(2)', 'fully')
		.assert.cssClassNotPresent('.example:nth-child(2)', 'above')
    .assert.cssClassPresent('.example:nth-child(2)', 'below')

		// All tests done
		.end();
  },
}
