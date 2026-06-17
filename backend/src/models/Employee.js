import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    profile: {
      contact: {
        email: {
          type: String,
          required: true,
          lowercase: true,
          trim: true,
        },

        phone: {
          type: String,
          required: true,
          trim: true,
        },

        address: {
          street: {
            type: String,
            required: true,
          },

          city: {
            type: String,
            required: true,
          },

          location: {
            state: {
              type: String,
              required: true,
            },

            country: {
              type: String,
              required: true,
            },

            geo: {
              lat: {
                type: String,
                required: true,
              },

              long: {
                type: String,
                required: true,
              },

              timezone: {
                name: {
                  type: String,
                  required: true,
                },

                utc_offset: {
                  type: String,
                  required: true,
                },
              },
            },
          },
        },
      },

      projects: [
        {
          projectId: {
            type: String,
            required: true,
          },

          name: {
            type: String,
            required: true,
          },

          tasks: [
            {
              taskId: {
                type: String,
                required: true,
              },

              description: {
                type: String,
                required: true,
              },

              assignedTo: {
                id: {
                  type: String,
                  required: true,
                },

                name: {
                  type: String,
                  required: true,
                },

                skills: {
                  primary: {
                    type: String,
                    required: true,
                  },

                  secondary: [
                    {
                      type: String,
                    },
                  ],

                  experience: {
                    years: {
                      type: Number,
                      required: true,
                      min: 0,
                    },

                    domains: [
                      {
                        type: String,
                      },
                    ],

                    certifications: {
                      current: [
                        {
                          type: String,
                        },
                      ],

                      expired: [
                        {
                          type: String,
                        },
                      ],

                      meta: {
                        verified: {
                          type: Boolean,
                          default: false,
                        },

                        lastUpdated: {
                          type: Date,
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Useful indexes for filtering/searching
employeeSchema.index({ id: 1 });
employeeSchema.index({ name: 1 });
employeeSchema.index({
  "profile.contact.address.location.country": 1,
});
employeeSchema.index({
  "profile.contact.address.location.state": 1,
});
employeeSchema.index({
  "profile.contact.address.city": 1,
});
employeeSchema.index({
  "profile.projects.tasks.assignedTo.skills.primary": 1,
});
employeeSchema.index({
  "profile.projects.tasks.assignedTo.skills.experience.years": 1,
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;