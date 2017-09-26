import { test } from "qunit";
import moduleForAcceptance from "sporadic-errors/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | can create user");

test("can create a user", function(assert) {
  visit("/create-user");

  fillIn("input", "john");
  click("button");

  andThen(function() {
    assert.equal(currentURL(), "/view-user");
    assert.equal(
      find("li")
        .text()
        .trim(),
      "john"
    );
  });
});
